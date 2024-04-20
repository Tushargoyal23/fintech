import React, { useState, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { Chart as ChartJS, registerables } from 'chart.js'; // Import Chart.js elements

ChartJS.register(...registerables); // Register Chart.js element

const TransactionChart = () => {
    const [timeRange, setTimeRange] = useState('monthly');
    const [transactions, setTransactions] = useState({});
    const chartRef = useRef(null); // Ref to store the chart instance

    useEffect(() => {
        fetchTransactions();
    }, [timeRange]);

    const fetchTransactions = async () => {
        try {
            const response = await fetch(`http://localhost:5000/api/transactions/${timeRange}`);
            const data = await response.json();
            // console.log(data);
            setTransactions(data);
        } catch (error) {
            console.error('Error fetching transactions:', error);
        }
    };

    const renderChart = () => {
        const ctx = document.getElementById('transactionChart').getContext('2d');

        if (chartRef.current) {
            // If chart instance exists, destroy it
            chartRef.current.destroy();
        }

        const allLabels = generateLabels();

        // Assuming transactions is an object with 'debit' and 'credit' properties
        const debitData = transactions.debit || {};
        const creditData = transactions.credit || {};
        // console.log(debitData,creditData);
        // Extract amounts for debit and credit transactions
        // Get all unique dates from debitData
        const allDates = Object.keys(debitData);

        // Sort dates chronologically
        allDates.sort((a, b) => new Date(a) - new Date(b));

        // Extract amounts for debit transactions in the sorted order of dates
        const debitAmounts = allDates.map(date => debitData[date]);

        // Get all unique dates from debitData  
        const allDates2 = Object.keys(creditData);

        // Sort dates chronologically
        allDates2.sort((a, b) => new Date(a) - new Date(b));

        // Extract amounts for debit transactions in the sorted order of dates
        const creditAmounts = allDates2.map(date => creditData[date]);

        console.log(debitAmounts, creditAmounts);
        // Render the chart
        chartRef.current = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: allLabels,
                datasets: [
                    {
                        label: 'Debit',
                        data: debitAmounts,
                        backgroundColor: 'rgba(255, 99, 132, 0.5)',
                    },
                    {
                        label: 'Credit',
                        data: creditAmounts,
                        backgroundColor: 'rgba(54, 162, 235, 0.5)',
                    },
                ],
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                    },
                },
            },
        });
    };

    useEffect(() => {
        renderChart();
    }, [transactions]); // Re-render chart when transactions change

    const onDropdownChange = (event) => {
        setTimeRange(event.target.value);
    };

    const generateLabels = () => {
        switch (timeRange) {
            case 'weekly':
                return getWeekDays();
            case 'monthly':
                return getMonths();
            case 'yearly':
                return getLastYears();
            default:
                return [];
        }
    };

    const getWeekDays = () => {
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const currentDate = new Date();
        const currentDayIndex = currentDate.getDay(); // 0 for Sunday, 1 for Monday, ..., 6 for Saturday
        const weekDays = [];

        for (let i = 0; i < 7; i++) {
            const dayIndex = (currentDayIndex + i) % 7;
            weekDays.push(days[dayIndex]);
        }

        return weekDays;
    };

    const getMonths = () => {
        const months = [];
        const currentDate = new Date();
        for (let i = 0; i < 12; i++) {
            months.push(currentDate.toLocaleString('default', { month: 'long' }));
            currentDate.setMonth(currentDate.getMonth() + 1);
        }
        return months;
    };

    const getLastYears = () => {
        const currentYear = new Date().getFullYear();
        const years = [];
        for (let i = 0; i < 7; i++) {
            years.push(currentYear - i);
        }
        return years;
    };

    return (
        <div>
            <div>
                <label htmlFor="timeRange">Time Range   :</label>
                <select id="timeRange" name="timeRange" onChange={onDropdownChange} value={timeRange}>
                    <option value="monthly">Monthly</option>
                    <option value="weekly">Weekly</option>
                    <option value="yearly">Yearly</option>
                </select>
            </div>
            <div id="chartContainer">
                <canvas id="transactionChart" width="400" height="400"></canvas>
            </div>
        </div>
    );
};

export default TransactionChart;
