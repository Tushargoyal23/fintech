import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Heading, Text, Button, Img } from "../../components";
import Header from "../../components/Header";
import Barchart from "../../components/Barchart";
import Sidebar1 from "../../components/Sidebar1";

export default function AccountsPage() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/get-transactions/${localStorage.email}`);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const jsonData = await response.json();
      setData(jsonData.data);

    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };
  let debitTotal = 0;
  let creditTotal = 0;

  // Iterate over the data array and accumulate amounts based on type
  data.forEach(item => {
    if (item.type === 'debit') {
      debitTotal += item.amount;
    } else {
      creditTotal += item.amount;
    }
  });
  console.log(debitTotal, creditTotal);
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
          <div className="flex flex-col items-center justify-start w-[94%] md:w-full gap-[23px]">
            <div className="flex flex-row md:flex-col w-full gap-[30px]">
              <div className="flex flex-row justify-start items-center w-[23%] md:w-full gap-[15px] p-[25px] sm:p-5 bg-white-A700 rounded-[25px]">
                <Button size="4xl" shape="circle" className="w-[70px] ml-[11px]">
                  <Img src="images/img_money_tag_1.svg" />
                </Button>
                <div className="flex flex-col items-start justify-start w-[48%] mr-[11px] gap-[5px]">
                  <Text as="p" className="text-base font-normal">
                    My Balance
                  </Text>
                  <Heading size="3xl" as="h3" className={`!text-${(creditTotal - debitTotal) < 0 ? 'red-600' : 'green-600'} font-semibold`}>
                    ₹{creditTotal - debitTotal}
                  </Heading>
                </div>
              </div>
              <div className="flex flex-row justify-center items-center w-[23%] md:w-full gap-[15px] p-[25px] sm:p-5 bg-white-A700 rounded-[25px]">
                <Button size="4xl" shape="circle" className="w-[70px] ml-4">
                  <Img src="images/img_group_400.svg" />
                </Button>
                <div className="flex flex-col items-start justify-start w-[43%] mr-[15px] gap-[7px]">
                  <Text as="p" className="text-base font-normal">
                    Income
                  </Text>
                  <Heading size="3xl" as="h2" className="!text-indigo-600_01 text-[25px] font-semibold">
                    ₹{creditTotal}
                  </Heading>
                </div>
              </div>
              <div className="flex flex-row justify-center items-center w-[23%] md:w-full gap-[15px] p-[25px] sm:p-5 bg-white-A700 rounded-[25px]">
                <Button size="4xl" shape="circle" className="w-[70px] ml-4">
                  <Img src="images/img_001_medical.svg" />
                </Button>
                <div className="flex flex-col items-start justify-start w-[44%] mr-[15px] gap-[5px]">
                  <Text as="p" className="text-base font-normal">
                    Expense
                  </Text>
                  <Heading size="3xl" as="h3" className="!text-indigo-600_01 text-[25px] font-semibold">
                    ₹{debitTotal}
                  </Heading>
                </div>
              </div>
              {/* <div className="flex flex-row justify-start items-center w-[23%] md:w-full gap-[15px] p-[25px] sm:p-5 bg-white-A700 rounded-[25px]">
                <Button size="4xl" shape="circle" className="w-[70px] ml-3.5">
                  <Img src="images/img_003_saving.svg" />
                </Button>
                <div className="flex flex-col items-start justify-start w-[46%] mr-[13px] gap-[5px]">
                  <Text as="p" className="text-base font-normal">
                    Total Saving
                  </Text>
                  <Heading size="3xl" as="h4" className="!text-indigo-600_01 text-[25px] font-semibold">
                    $7,920
                  </Heading>
                </div>
              </div> */}
            </div>
            <div className="container" style={{ width: '100%' }}>

              <div className="flex flex-row md:flex-col justify-start w-full gap-[30px] md:gap-5">
                <div className="flex flex-col items-start justify-start w-[66%] md:w-full gap-[19px]">
                  <Heading as="h5" className="text-[22px] font-semibold">
                    Debit & Credit Overview
                  </Heading>
                <Barchart/>
                  <div className="flex flex-row justify-start w-full">
                    <div className="flex flex-row justify-center w-full p-[26px] sm:p-5 bg-white-A700 rounded-[25px]">
                      <div className="flex flex-col items-center justify-start w-[99%] gap-[26px] mx-[3px]">
                        <div className="flex flex-row sm:flex-col justify-between w-full sm:gap-10">
                          <Text as="p" className="flex mt-px sm:mt-0 text-base font-normal">
                            <span className="text-blue_gray_800_01">$7,560</span>
                            <span className="text-blue_gray-400">Debited & </span>
                            <span className="text-blue_gray_800_01">$5,420</span>
                            <span className="text-blue_gray-400">Credited in this Week</span>
                          </Text>
                          <div className="flex flex-row justify-start w-[25%] sm:w-full gap-[25px]">
                            <div className="flex flex-row justify-start items-center w-[41%] gap-2.5">
                              <div className="h-[15px] w-[15px] bg-indigo-600_01 shadow-bs rounded-[5px]" />
                              <Text as="p" className="text-base font-normal">
                                Debit
                              </Text>
                            </div>
                            <div className="flex flex-row justify-start items-center w-[45%] gap-2.5">
                              <div className="h-[15px] w-[15px] bg-indigo-200 rounded-[5px]" />
                              <Text as="p" className="text-base font-normal">
                                Credit
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row justify-center w-full">
                          <div className="flex flex-col items-center justify-start w-full gap-3">
                            <div className="flex flex-row md:flex-col justify-center items-end w-full md:gap-5">
                              <div className="h-[135px] w-[5%] bg-indigo-600_01 rounded-[10px]" />
                              <div className="h-[234px] w-[5%] ml-2.5 md:ml-0 bg-indigo-200 rounded-[10px]" />
                              <div className="h-[106px] w-[5%] ml-[30px] md:ml-0 sm:ml-5 bg-indigo-600_01 rounded-[10px]" />
                              <div className="h-[186px] w-[5%] ml-2.5 md:ml-0 bg-indigo-200 rounded-[10px]" />
                              <div className="h-[102px] w-[5%] ml-[30px] md:ml-0 sm:ml-5 bg-indigo-600_01 rounded-[10px]" />
                              <div className="h-[139px] w-[5%] ml-2.5 md:ml-0 bg-indigo-200 rounded-[10px]" />
                              <div className="h-[212px] w-[5%] ml-[30px] md:ml-0 sm:ml-5 bg-indigo-600_01 rounded-[10px]" />
                              <div className="h-[123px] w-[5%] ml-2.5 md:ml-0 bg-indigo-200 rounded-[10px]" />
                              <div className="h-[150px] w-[5%] ml-[30px] md:ml-0 sm:ml-5 bg-indigo-600_01 rounded-[10px]" />
                              <div className="h-[214px] w-[5%] ml-2.5 md:ml-0 bg-indigo-200 rounded-[10px]" />
                              <div className="h-[158px] w-[5%] ml-[30px] md:ml-0 sm:ml-5 bg-indigo-600_01 rounded-[10px]" />
                              <div className="h-[105px] w-[5%] ml-2.5 md:ml-0 bg-indigo-200 rounded-[10px]" />
                              <div className="h-[179px] w-[5%] ml-[30px] md:ml-0 sm:ml-5 bg-indigo-600_01 rounded-[10px]" />
                              <div className="h-[216px] w-[5%] ml-2.5 md:ml-0 bg-indigo-200 rounded-[10px]" />
                            </div>
                            <div className="flex flex-row justify-between w-[93%] md:w-full">
                              <Text size="md" as="p" className="text-center text-sm font-normal">
                                Sat
                              </Text>
                              <Text size="md" as="p" className="text-center text-sm font-normal">
                                Sun
                              </Text>
                              <Text size="md" as="p" className="text-center text-sm font-normal">
                                Mon
                              </Text>
                              <Text size="md" as="p" className="text-center text-sm font-normal">
                                Tue
                              </Text>
                              <Text size="md" as="p" className="text-center text-sm font-normal">
                                Wed
                              </Text>
                              <Text size="md" as="p" className="text-center text-sm font-normal">
                                Thu
                              </Text>
                              <Text size="md" as="p" className="h-[17px] text-center text-sm font-normal">
                                Fri
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


              <div >
                <div className="flex flex-row md:flex-col justify-start items-center w-full gap-[30px] md:gap-5">
                  <div className="flex flex-col items-start justify-start w-[66%] md:w-full gap-[19px]">
                    <Heading as="h5" className="text-[22px] font-semibold">
                      Last Transaction
                    </Heading>

                    <div className="flex flex-row md:flex-col justify-between items-center w-full md:gap-10">
            
                      <div>
                        {/* Render data */}
                        {data.map((item, index) => (
                          <div class="CountersNumericV4WProgress w-96 h-44 relative">
                            <div class="Bg w-96 h-44 left-0 top-0 absolute rounded-xl border border-neutral-300 border-opacity-70"></div>
                            <div class="AmountR left-[332px] top-[110px] absolute text-right text-black text-sm font-bold leading-tight">{item.type}</div>
                            <div class="AmountL left-[24px] top-[110px] absolute text-black text-sm font-bold leading-tight">{new Date(item.date).getMonth() + 1}/{new Date(item.date).getDate()}/{new Date(item.date).getFullYear()}</div>
                            <div class="ElementProgressBarsMedium w-96 h-1 left-[24px] top-[86px] absolute">
                              <div class="Bg w-80 h-1 left-0 top-0 static bg-white bg-opacity-90 rounded-sm"></div>
                              <div class="Progress w-48 h-1 left-0 top-0 absolute bg-amber-300 rounded-sm"></div>
                            </div>
                            <div class="SubtitleR left-[340px] top-[133px] absolute text-right text-zinc-500 text-xs font-medium leading-none">{item.paymentMethod}</div>
                            <div class="SubtitleL left-[24px] top-[133px] absolute text-zinc-500 text-xs font-medium leading-none">Transaction date</div>
                            <div className={`!text-${(item.type) === 'debit' ? 'red-600' : 'green-600'} Amount left-[24px] top-[41px] absolute text-black text-lg font-extrabold leading-normal `}>₹{item.amount}</div>
                            <div class="Title left-[24px] top-[15px] absolute text-zinc-900 text-sm font-normal leading-tight">{item.name}</div>
                          </div>
                        ))}
                      </div>

                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
