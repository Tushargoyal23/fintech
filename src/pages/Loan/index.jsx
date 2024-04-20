import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import axios from 'axios'
import { Text, Heading, Button, Img } from "../../components";
import Header from "../../components/Header";
import { ReactTable } from "../../components/ReactTable";
import Sidebar1 from "../../components/Sidebar1";
import { createColumnHelper } from "@tanstack/react-table";
import '../Loan.css'; // Import the CSS file
// function calculateTotalRepayment(principal, monthlyRate, months) {
//   const r = monthlyRate;
//   const n = months;

//   const totalRepayment = principal * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
//   return totalRepayment;
// }
function calculateTotalRepayment(principal, annualRate, years) {
  const monthlyRate = annualRate / 12 / 100; // Convert annual rate to monthly rate
  const months = years; // Convert years to months

  const totalRepayment = principal * Math.pow((1 + monthlyRate)/100, months);
  return Math.floor( totalRepayment);
}

// Example usage:
let date=new Date();
 const year = date.getFullYear();
  const month = `0${date.getMonth() + 1}`.slice(-2);
  
const day = `0${date.getDate()}`.slice(-2);
const principal = 100000; // Principal amount
const annualRate = 10; // Annual interest rate (in percentage)
const years = 5; // Loan duration in years

const totalRepayment = calculateTotalRepayment(principal, annualRate, years);
console.log("Total repayment amount:", totalRepayment);

// const totalRepayment = calculateTotalRepayment(principal, annualRate, months);
// console.log("Total repayment amount:", totalRepayment.toFixed(2)); // Displaying result with 2 decimal places

function calculateEMI(loanAmount, annualInterestRate, loanTenureYears) {
  // Convert annual interest rate to monthly interest rate
  let monthlyInterestRate = annualInterestRate / (12 * 100);

  // Convert loan tenure from years to months
  let loanTenureMonths = loanTenureYears;

  // Calculate EMI using the formula
  let emi = loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, loanTenureMonths) /
    (Math.pow(1 + monthlyInterestRate, loanTenureMonths) - 1);

  // Round the EMI to two decimal places
  emi = Math.round(emi * 100) / 100;

  return emi;
}

// Example usage:
let loanAmount = 100000; // Loan amount in currency (e.g., dollars)
let annualInterestRate = 10; // Annual interest rate (in percentage)
let loanTenureYears = 5; // Loan tenure in years

// Calculate EMI
let emi = calculateEMI(loanAmount, annualInterestRate, loanTenureYears);





export default function LoanPage() {
  const [loans, setLoans] = useState([]);
  const Addrepay= async(id)=>{
    console.log(id)
    try {
      const res = await axios.post(`http://localhost:5000/api/repay/${id}`)
  
      if (res.data.success) {
        setLoans(res.data.data);
        
        console.log(loans)
      }
    } catch (error) {
      console.log(error);
    }
  }
  console.log(loans)
  const getUsers = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/get-loans")

      if (res.data.success) {
        setLoans(res.data.data);
        console.log(loans)
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUsers();
  }, []);
  


  // const table1Columns = React.useMemo(() => {
  //   const table1ColumnHelper = createColumnHelper();
  //   return [
  //     table1ColumnHelper.accessor("slno", {
  //       cell: (info) => (
  //         <Text as="p" className="!text-blue_gray-900 text-base font-normal">
  //           {info?.getValue?.()}
  //         </Text>
  //       ),
  //       header: (info) => (
  //         <Text as="p" className="pt-px pb-[11px] text-base font-medium">
  //           SL No
  //         </Text>
  //       ),
  //       meta: { width: "100px" },
  //     }),
  //     table1ColumnHelper.accessor("loanmoney", {
  //       cell: (info) => (
  //         <Text as="p" className="!text-blue_gray-900 text-base font-normal">
  //           {info?.getValue?.()}
  //         </Text>
  //       ),
  //       header: (info) => (
  //         <Text as="p" className="pt-px pb-2.5 text-base font-medium">
  //           Loan Money
  //         </Text>
  //       ),
  //       meta: { width: "168px" },
  //     }),
  //     table1ColumnHelper.accessor("lefttorepay", {
  //       cell: (info) => (
  //         <Text as="p" className="!text-blue_gray-900 text-base font-normal">
  //           {info?.getValue?.()}
  //         </Text>
  //       ),
  //       header: (info) => (
  //         <Text as="p" className="pt-px pb-2.5 text-base font-medium">
  //           Left to repay
  //         </Text>
  //       ),
  //       meta: { width: "174px" },
  //     }),
  //     table1ColumnHelper.accessor("duration", {
  //       cell: (info) => (
  //         <Text as="p" className="!text-blue_gray-900 text-base font-normal">
  //           {info?.getValue?.()}
  //         </Text>
  //       ),
  //       header: (info) => (
  //         <Text as="p" className="pb-[11px] text-base font-medium">
  //           Duration
  //         </Text>
  //       ),
  //       meta: { width: "171px" },
  //     }),
  //     table1ColumnHelper.accessor("interestrate", {
  //       cell: (info) => (
  //         <Text as="p" className="!text-blue_gray-900 text-base font-normal">
  //           {info?.getValue?.()}
  //         </Text>
  //       ),
  //       header: (info) => (
  //         <Text as="p" className="pt-px pb-[11px] text-base font-medium">
  //           Interest rate
  //         </Text>
  //       ),
  //       meta: { width: "147px" },
  //     }),
  //     table1ColumnHelper.accessor("installment", {
  //       cell: (info) => (
  //         <Text as="p" className="!text-blue_gray-900 text-base font-normal">
  //           {info?.getValue?.()}
  //         </Text>
  //       ),
  //       header: (info) => (
  //         <Text as="p" className="pt-px pb-[11px] text-base font-medium">
  //           Installment
  //         </Text>
  //       ),
  //       meta: { width: "172px" },
  //     }),
  //     table1ColumnHelper.accessor("repay", {
  //       cell: (info) => (
  //         <div className="h-[20px] md:w-full relative">
  //           <Text
  //             size="lg"
  //             as="p"
  //             className="left-1/4 top-0 m-auto !text-indigo-500 text-center text-[15px] font-medium absolute"
  //           >
  //             {info?.getValue?.()}
  //           </Text>
  //           <div className="h-[35px] w-[85%] left-[2%] top-0 m-auto border-indigo-500 border border-solid absolute rounded-[17px]" />
  //         </div>
  //       ),
  //       header: (info) => (
  //         <Text as="p" className="pt-px pb-2.5 text-base font-medium">
  //           Repay
  //         </Text>
  //       ),
  //       meta: { width: "118px" },
  //     }),
  //   ];
  // }, []);

  return (
    <>
      <Helmet>
        <title>hack36</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-row md:flex-col justify-center items-start w-full md:gap-5 bg-gray-100">
        <Sidebar1 className="w-[252px] h-screen top-0 bg-white-A700 !sticky overflow-auto" />
        <div className="flex flex-col items-center justify-start w-[83%] md:w-full gap-[31px]">
          <Header className="flex justify-center items-center w-full sm:w-full pt-5 pb-[19px] px-5 border-gray-300 border-b border-solid bg-white-A700" />
          <div className="flex flex-col items-center justify-start w-[94%] md:w-full gap-6">
            <div className="flex flex-row md:flex-col w-full gap-[30px]">
              <div className="flex flex-row justify-start items-center w-[23%] md:w-full gap-[15px] p-[25px] sm:p-5 bg-white-A700 rounded-[25px]">
                <Button size="4xl" shape="circle" className="w-[70px]">
                  <Img src="images/img_user_3_2.svg" />
                </Button>
                <div className="flex flex-col items-start justify-start w-[57%] gap-[7px]">
                  <Text as="p" className="text-base font-normal">
                    Personal Loans
                  </Text>
                  <Heading size="xl" as="h1" className="text-xl font-semibold">
                    $50,000
                  </Heading>
                </div>
              </div>
              <div className="flex flex-row justify-start items-center w-[23%] md:w-full gap-[15px] p-[21px] sm:p-5 bg-white-A700 rounded-[25px]">
                <Button size="4xl" shape="circle" className="w-[70px] my-1">
                  <Img src="images/img_briefcase_1.svg" />
                </Button>
                <div className="flex flex-col items-start justify-start w-[60%] gap-1.5">
                  <Text as="p" className="text-base font-normal">
                    Corporate Loans
                  </Text>
                  <Heading size="xl" as="h2" className="text-xl font-semibold">
                    $100,000
                  </Heading>
                </div>
              </div>
              <div className="flex flex-row justify-start items-center w-[23%] md:w-full gap-[15px] p-[25px] sm:p-5 bg-white-A700 rounded-[25px]">
                <Button size="4xl" shape="circle" className="w-[70px]">
                  <Img src="images/img_graph_1.svg" />
                </Button>
                <div className="flex flex-col items-start justify-start w-[58%] gap-[7px]">
                  <Text as="p" className="text-base font-normal">
                    Business Loans
                  </Text>
                  <Heading size="xl" as="h3" className="text-xl font-semibold">
                    $500,000
                  </Heading>
                </div>
              </div>
              <div className="flex flex-row justify-start items-center w-[23%] md:w-full gap-3 p-[21px] sm:p-5 bg-white-A700 rounded-[25px]">
                <Button size="4xl" shape="circle" className="w-[70px] my-1">
                  <Img src="images/img_group_296.svg" />
                </Button>
                <div className="flex flex-col items-start justify-start w-[62%] gap-2.5">
                  <Text as="p" className="text-base font-normal">
                    Custom Loans
                  </Text>
                  <Heading size="lg" as="h4" className="text-lg font-semibold">
                    Choose Money
                  </Heading>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-full gap-3.5">
              <Heading as="h5" className="text-[22px] font-semibold">
                Active Loans Overview
              </Heading>
              <div>
                <h2>Loan Data</h2>
                <table className="loan-table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Loan Amount</th>
                      <th>Net Amount</th>
                      {/* <th>Repayamount</th> */}
                      <th>Months Remain</th>
                      <th>Rate</th>
                      <th>Installment</th>
                      <th>Repay</th>
                      <th>Custum Pay</th>
                      {/* Add other column headers as needed */}
                    </tr>
                  </thead>
                  <tbody>
                    {loans.map((loan, index) => (
                      <tr key={index}>
                        <td>{loan.loanname}</td>
                        <td>{loan.amount}</td>
                        <td>{calculateEMI(loan.amount, loan.rate, loan.timeperiod)*loan.timeperiod-(year-loan.loanyear)*12-(month-loan.loanmonth)}</td>
                        {/* <td>{calculateEMI(loan.amount, loan.rate, loan.timeperiod)*((year-loan.lastyear)*12+(month-loan.lastmonth))}</td> */}
                        <td>{loan.timeperiod-(year-loan.loanyear)*12-(month-loan.loanmonth)}</td>
                        <td>{loan.rate}</td>
                        <td>{calculateEMI(loan.amount, loan.rate, loan.timeperiod-(year-loan.loanyear)*12-(month-loan.loanmonth))}</td>
                        <td>{<button type='submit' className="btn btn-primary" onClick={()=>Addrepay(loan._id)}>repay</button> }</td>
                        <td>{<button className="btn btn-danger">custom</button> }</td>
                        {/* Add other table cells based on your data */}
                      </tr>
                    ))}
                  </tbody>
                </table>
        <div>
          <button className="btn btn-warning">Add loan</button>
        </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
