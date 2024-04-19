import React from "react";
import { Helmet } from "react-helmet";
import { Text, Img, Heading, Button, Slider } from "../../components";
import Header from "../../components/Header";
import { MenuItem, Menu, Sidebar } from "react-pro-sidebar";

export default function MainDashboardPage() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);
  const [collapsed, setCollapsed] = React.useState(false);

  return (
    <>
      <Helmet>
        <title>hack36</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-row md:flex-col justify-center items-start w-full pb-[30px] md:gap-5 sm:pb-5 bg-gray-100">
        <Sidebar
          width="252px !important"
          collapsedWidth="80px !important"
          collapsed={collapsed}
          onClick={() => {
            setCollapsed(!collapsed);
          }}
          className="h-screen top-0 bg-white-A700 !sticky overflow-auto"
        >
          <Img
            src="images/img_logo.png"
            alt="logo_one"
            className="w-[65%] md:h-auto sm:w-full mt-[30px] mx-auto object-cover"
          />
          <Menu
            menuItemStyles={{
              button: {
                padding: "17px 17px 17px 39px",
                gap: "20px",
                color: "#888ea2",
                fontWeight: 500,
                fontSize: "18px",
                [`&:hover, &.ps-active`]: { color: "#314ca3" },
              },
            }}
            className="flex flex-col items-center justify-start w-full mt-[50px] mb-[364px]"
          >
            <MenuItem icon={<Img src="images/img_vector.svg" alt="vector_one" className="h-[25px] w-[25px]" />}>
              Dashboard
            </MenuItem>
            <MenuItem icon={<Img src="images/img_glyph.svg" alt="glyph_one" className="h-[25px] w-[25px]" />}>
              Transactions
            </MenuItem>
            <MenuItem icon={<Img src="images/img_user_3_1.svg" alt="user3one_one" className="h-[25px] w-[25px]" />}>
              Accounts
            </MenuItem>
            <MenuItem icon={<Img src="images/img_group.svg" alt="image" className="h-[25px] w-[25px]" />}>
              Investments
            </MenuItem>
            <MenuItem
              icon={<Img src="images/img_credit_card_1.svg" alt="creditcardone" className="h-[25px] w-[25px]" />}
            >
              Credit Cards
            </MenuItem>
            <MenuItem icon={<Img src="images/img_loan_1.svg" alt="loanone_one" className="h-[25px] w-[25px]" />}>
              Loans
            </MenuItem>
            <MenuItem icon={<Img src="images/img_service_1.svg" alt="serviceone_one" className="h-[25px] w-[25px]" />}>
              Services
            </MenuItem>
            <MenuItem
              icon={<Img src="images/img_econometrics_1.svg" alt="econometricsone" className="h-[25px] w-[25px]" />}
            >
              My Privileges
            </MenuItem>
            <MenuItem
              icon={<Img src="images/img_vector_blue_gray_400.svg" alt="vector_three" className="h-[25px] w-[25px]" />}
            >
              Setting
            </MenuItem>
          </Menu>
        </Sidebar>
        <div className="flex flex-col items-center justify-start w-[83%] md:w-full gap-[25px]">
          <Header className="flex justify-center items-center w-full sm:w-full pt-5 pb-[19px] px-5 border-gray-300 border-b border-solid bg-white-A700" />
          <div className="flex flex-col items-center justify-start w-[94%] md:w-full gap-[25px]">
            <div className="flex flex-row md:flex-col justify-start items-center w-full gap-[30px] md:gap-5">
              <div className="flex flex-row justify-start w-[66%] md:w-full">
                <div className="flex flex-col items-center justify-start w-full gap-[17px]">
                  <div className="flex flex-row justify-between items-start w-full">
                    <Heading as="h1" className="text-[22px] font-semibold">
                      My Cards
                    </Heading>
                    <a>
                      <Heading size="md" as="h2" className="text-right text-[17px] font-semibold">
                        See All
                      </Heading>
                    </a>
                  </div>
                  <div className="flex flex-row md:flex-col w-full gap-[30px]">
                    <div className="flex flex-col items-center justify-start w-[48%] md:w-full pt-6 gap-[33px] sm:pt-5 bg-indigo-600_01 rounded-[25px]">
                      <div className="flex flex-col items-start justify-start w-[87%] md:w-full gap-[27px]">
                        <div className="flex flex-row justify-between items-start w-full">
                          <div className="flex flex-col items-start justify-start gap-0.5">
                            <Text size="xs" as="p" className="!text-white-A700 !font-lato text-xs font-normal">
                              Balance
                            </Text>
                            <Text size="4xl" as="p" className="!text-white-A700 text-xl font-normal">
                              $5,756
                            </Text>
                          </div>
                          <Img
                            src="images/img_chip_card.png"
                            alt="balance_two"
                            className="w-[34px] md:h-auto object-cover"
                          />
                        </div>
                        <div className="flex flex-row justify-between w-[76%] md:w-full">
                          <div className="flex flex-col items-start justify-start gap-1">
                            <Text size="xs" as="p" className="!text-white-A700_b2 text-xs font-normal">
                              CARD HOLDER
                            </Text>
                            <Text size="lg" as="p" className="!text-white-A700 text-[15px] font-normal">
                              Eddy Cusuma
                            </Text>
                          </div>
                          <div className="flex flex-col items-start justify-start gap-1">
                            <Text size="xs" as="p" className="!text-white-A700_b2 text-xs font-normal">
                              VALID THRU
                            </Text>
                            <Text size="lg" as="p" className="!text-white-A700 text-[15px] font-normal">
                              12/22
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row justify-center w-full">
                        <div className="flex flex-row justify-center w-full p-5 rounded-bl-[25px] rounded-br-[25px] bg-gradient">
                          <div className="flex flex-row justify-between items-center w-[98%] mx-1">
                            <Text size="5xl" as="p" className="!text-white-A700 text-[22px] font-normal">
                              3778 **** **** 1234
                            </Text>
                            <Img src="images/img_group_17.svg" alt="image" className="h-[30px]" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start w-[48%] md:w-full pt-6 gap-[33px] sm:pt-5 bg-indigo-500 rounded-[25px]">
                      <div className="flex flex-col items-start justify-start w-[87%] md:w-full gap-[27px]">
                        <div className="flex flex-row justify-between items-start w-full">
                          <div className="flex flex-col items-start justify-start gap-0.5">
                            <Text size="xs" as="p" className="!text-white-A700 !font-lato text-xs font-normal">
                              Balance
                            </Text>
                            <Text size="4xl" as="p" className="!text-white-A700 text-xl font-normal">
                              $5,756
                            </Text>
                          </div>
                          <Img
                            src="images/img_chip_card.png"
                            alt="chipcard_one"
                            className="w-[34px] md:h-auto object-cover"
                          />
                        </div>
                        <div className="flex flex-row justify-between w-[76%] md:w-full">
                          <div className="flex flex-col items-start justify-start gap-1">
                            <Text size="xs" as="p" className="!text-white-A700_b2 text-xs font-normal">
                              CARD HOLDER
                            </Text>
                            <Text size="lg" as="p" className="!text-white-A700 text-[15px] font-normal">
                              Eddy Cusuma
                            </Text>
                          </div>
                          <div className="flex flex-col items-start justify-start gap-1">
                            <Text size="xs" as="p" className="!text-white-A700_b2 text-xs font-normal">
                              VALID THRU
                            </Text>
                            <Text size="lg" as="p" className="!text-white-A700 text-[15px] font-normal">
                              12/22
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row justify-center w-full">
                        <div className="flex flex-row justify-center w-full p-5 rounded-bl-[25px] rounded-br-[25px] bg-gradient">
                          <div className="flex flex-row justify-between items-center w-[98%] mx-1">
                            <Text size="5xl" as="p" className="!text-white-A700 text-[22px] font-normal">
                              3778 **** **** 1234
                            </Text>
                            <Img src="images/img_group_17.svg" alt="image" className="h-[30px]" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-[32%] md:w-full gap-[19px]">
                <Heading as="h3" className="text-[22px] font-semibold">
                  Recent Transaction
                </Heading>
                <div className="flex flex-row justify-start w-full">
                  <div className="flex flex-col w-full gap-2.5 p-6 sm:p-5 bg-white-A700 rounded-[25px]">
                    <div className="flex flex-row justify-between items-center w-full">
                      <Button size="2xl" shape="circle" className="w-[55px] !rounded-[27px]">
                        <Img src="images/img_iconfinder_busi.svg" />
                      </Button>
                      <div className="flex flex-col items-start justify-start gap-[5px]">
                        <Text as="p" className="!text-blue_gray-600 text-base font-medium">
                          Deposit from my Card
                        </Text>
                        <Text size="lg" as="p" className="text-[15px] font-normal">
                          28 January 2021
                        </Text>
                      </div>
                      <Text as="p" className="!text-red-700 text-right text-base font-medium">
                        -$850
                      </Text>
                    </div>
                    <div className="flex flex-row justify-center items-center w-full">
                      <Button size="2xl" shape="circle" className="w-[55px] !rounded-[27px]">
                        <Img src="images/img_iconfinder_payp.svg" />
                      </Button>
                      <div className="flex flex-col items-center justify-start w-[39%] ml-[17px] gap-[5px]">
                        <Text as="p" className="!text-blue_gray-600 text-base font-medium">
                          Deposit Paypal
                        </Text>
                        <Text size="lg" as="p" className="text-[15px] font-normal">
                          25 January 2021
                        </Text>
                      </div>
                      <Text as="p" className="ml-[46px] md:ml-5 !text-green-600 text-right text-base font-medium">
                        +$2,500
                      </Text>
                    </div>
                    <div className="flex flex-row justify-center items-center w-full">
                      <Button size="2xl" shape="circle" className="w-[55px] !rounded-[27px]">
                        <Img src="images/img_iconfinder_6_4753731.svg" />
                      </Button>
                      <div className="flex flex-col items-start justify-start w-[38%] ml-[17px] gap-[7px]">
                        <Text as="p" className="!text-blue_gray-600 text-base font-medium">
                          Jemi Wilson
                        </Text>
                        <Text size="lg" as="p" className="text-[15px] font-normal">
                          21 January 2021
                        </Text>
                      </div>
                      <Text as="p" className="ml-12 md:ml-5 !text-green-600 text-right text-base font-medium">
                        +$5,400
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row md:flex-col justify-start w-full gap-[30px] md:gap-5">
              <div className="flex flex-col items-start justify-start w-[66%] md:w-full gap-[15px]">
                <Heading as="h4" className="text-[22px] font-semibold">
                  Weekly Activity
                </Heading>
                <div className="flex flex-row justify-center w-full p-[26px] sm:p-5 bg-white-A700 rounded-[25px]">
                  <div className="flex flex-col items-end justify-start w-[99%] ml-1.5 mr-[3px] gap-5">
                    <div className="flex flex-row justify-start w-[30%] md:w-full gap-[30px]">
                      <div className="flex flex-row justify-start items-center w-[38%] gap-2.5">
                        <div className="h-[15px] w-[15px] bg-indigo-200 rounded-[7px]" />
                        <Text size="lg" as="p" className="text-[15px] font-normal">
                          Diposit
                        </Text>
                      </div>
                      <div className="flex flex-row justify-start items-center w-[47%] gap-2.5">
                        <div className="h-[15px] w-[15px] bg-indigo-600_01 rounded-[7px]" />
                        <Text size="lg" as="p" className="text-[15px] font-normal">
                          Withdraw
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row justify-end w-full">
                      <div className="flex flex-col items-end justify-start w-full gap-2">
                        <div className="flex flex-row md:flex-col justify-start items-center w-full gap-2.5 md:gap-5">
                          <div className="flex flex-col items-center justify-start w-[4%] md:w-full gap-[21px]">
                            <Text size="s" as="p" className="text-right text-[13px] font-normal">
                              500
                            </Text>
                            <Text size="s" as="p" className="text-right text-[13px] font-normal">
                              400
                            </Text>
                            <Text size="s" as="p" className="text-right text-[13px] font-normal">
                              300
                            </Text>
                            <Text size="s" as="p" className="text-right text-[13px] font-normal">
                              200
                            </Text>
                            <Text size="s" as="p" className="text-right text-[13px] font-normal">
                              100
                            </Text>
                            <Text size="s" as="p" className="text-right text-[13px] font-normal">
                              0
                            </Text>
                          </div>
                          <Img src="images/img_group_899.svg" alt="image_one" className="h-[186px]" />
                        </div>
                        <div className="flex flex-row justify-between w-[84%] md:w-full mr-[37px] sm:mr-5">
                          <Text size="s" as="p" className="text-center text-[13px] font-normal">
                            Sat
                          </Text>
                          <Text size="s" as="p" className="text-center text-[13px] font-normal">
                            Sun
                          </Text>
                          <Text size="s" as="p" className="text-center text-[13px] font-normal">
                            Mon
                          </Text>
                          <Text size="s" as="p" className="text-center text-[13px] font-normal">
                            Tue
                          </Text>
                          <Text size="s" as="p" className="text-center text-[13px] font-normal">
                            Wed
                          </Text>
                          <Text size="s" as="p" className="text-center text-[13px] font-normal">
                            Thu
                          </Text>
                          <Text size="s" as="p" className="h-[16px] text-center text-[13px] font-normal">
                            Fri
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-[32%] md:w-full gap-[15px]">
                <Heading as="h5" className="text-[22px] font-semibold">
                  Expense Statistics
                </Heading>
                <div className="flex flex-row justify-center w-full p-[31px] sm:p-5 bg-white-A700 rounded-[25px]">
                  <div className="h-[259px] w-[94%] sm:w-full mx-[9px] relative">
                    <div className="flex flex-col items-center justify-start h-[119px] w-[119px] bottom-0 right-[12%] m-auto absolute">
                      <div className="flex flex-col items-center justify-start h-[119px] w-[119px] p-[23px] sm:p-5 bg-indigo-200">
                        <Text
                          size="s"
                          as="p"
                          className="flex w-[66%] mb-[33px] !text-white-A700 text-center text-[13px] font-medium leading-[18px]"
                        >
                          <span className="text-white-A700 text-base font-bold">
                            <>
                              35%
                              <br />
                            </>
                          </span>
                          <span className="text-white-A700 font-bold">Others</span>
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row justify-end w-[54%] right-0 top-[11%] m-auto absolute">
                      <div className="h-[102px] w-full sm:w-full relative">
                        <Img
                          src="images/img_vector_indigo_500.svg"
                          alt="vector_five"
                          className="justify-center h-[102px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                        />
                        <Text
                          size="s"
                          as="p"
                          className="w-[58%] bottom-[7%] right-[19%] m-auto !text-white-A700 text-center text-[13px] font-medium leading-[18px] absolute"
                        >
                          <span className="text-white-A700 text-base font-bold">
                            <>
                              15%
                              <br />
                            </>
                          </span>
                          <span className="text-white-A700 font-bold">Bill Expense</span>
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start w-[41%] bottom-[4%] left-0 m-auto absolute">
                      <div className="h-[189px] w-full relative">
                        <Img
                          src="images/img_vector_indigo_100.svg"
                          alt="vector_seven"
                          className="justify-center h-[189px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                        />
                        <Text
                          size="s"
                          as="p"
                          className="justify-center w-max h-max left-0 bottom-0 right-0 top-0 m-auto !text-white-A700 text-center text-[13px] font-medium leading-[18px] absolute"
                        >
                          <span className="text-white-A700 text-base font-bold">
                            <>
                              20%
                              <br />
                            </>
                          </span>
                          <span className="text-white-A700 font-bold">Investment</span>
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row justify-start w-[69%] left-[7%] top-0 m-auto absolute">
                      <div className="h-[129px] w-full sm:w-full relative">
                        <Img
                          src="images/img_vector_indigo_600_01_129x185.svg"
                          alt="vector_nine"
                          className="justify-center h-[129px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                        />
                        <Text
                          size="s"
                          as="p"
                          className="w-[55%] top-[26%] right-0 left-0 m-auto !text-white-A700 text-center text-[13px] font-medium leading-[18px] absolute"
                        >
                          <span className="text-white-A700 text-base font-bold">
                            <>
                              30%
                              <br />
                            </>
                          </span>
                          <span className="text-white-A700 font-bold">Entertainment</span>
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row md:flex-col justify-start items-center w-full gap-[30px] md:gap-5">
              <div className="flex flex-col items-start justify-start w-[41%] md:w-full gap-[19px]">
                <Heading as="h6" className="!text-blue_gray-800 text-[22px] font-semibold">
                  Quick Transfer
                </Heading>
                <div className="flex flex-col items-center justify-center w-full gap-[27px] p-[25px] sm:p-5 bg-white-A700 rounded-[25px]">
                  <div className="flex flex-row sm:flex-col justify-between items-center w-full mt-2.5 sm:gap-10">
                    <div className="w-[79%]">
                      <Slider
                        autoPlay
                        autoPlayInterval={2000}
                        responsive={{ 0: { items: 1 }, 550: { items: 2 }, 1050: { items: 3 } }}
                        disableDotsControls
                        activeIndex={sliderState}
                        onSlideChanged={(e) => {
                          setSliderState(e?.item);
                        }}
                        ref={sliderRef}
                        items={[...Array(9)].map(() => (
                          <React.Fragment key={Math.random()}>
                            <div className="flex flex-col items-center justify-start gap-3.5 mx-2.5">
                              <Img
                                src="images/img_ellipse_17.png"
                                alt="circleimage"
                                className="h-[70px] w-[70px] md:h-auto rounded-[50%]"
                              />
                              <div className="flex flex-col items-center justify-start w-full gap-[5px]">
                                <Text as="p" className="!text-blue_gray-800 text-base font-normal">
                                  Workman
                                </Text>
                                <Text size="lg" as="p" className="text-[15px] font-normal">
                                  Designer
                                </Text>
                              </div>
                            </div>
                          </React.Fragment>
                        ))}
                      />
                    </div>
                    <Button color="white_A700" shape="circle" className="w-[50px]">
                      <Img src="images/img_arrow_right.svg" />
                    </Button>
                  </div>
                  <div className="flex flex-row justify-start items-center w-full mb-2.5 gap-[27px]">
                    <Text as="p" className="text-base font-normal">
                      Write Amount
                    </Text>
                    <div className="flex flex-row justify-start w-[68%]">
                      <div className="flex flex-col items-end justify-start w-full">
                        <div className="flex flex-row justify-start w-full p-3.5 bg-gray-100_04 rounded-[25px]">
                          <Heading size="s" as="h6" className="ml-[15px] !text-indigo-700 text-base font-bold">
                            525.50
                          </Heading>
                        </div>
                        <Button
                          color="indigo_700"
                          size="lg"
                          rightIcon={<Img src="images/img_send_iocn.svg" alt="Send Iocn" />}
                          className="mt-[-50px] gap-3 sm:px-5 font-medium min-w-[125px] rounded-[25px] sm:min-w-full"
                        >
                          Send
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-[58%] md:w-full gap-[17px]">
                <Heading as="h5" className="text-[22px] font-semibold">
                  Balance History
                </Heading>
                <div className="flex flex-row justify-center w-full p-[23px] sm:p-5 bg-white-A700 rounded-[25px]">
                  <div className="flex flex-row justify-center w-full mt-[3px] mb-1">
                    <div className="flex flex-row sm:flex-col justify-center items-start w-full sm:gap-5">
                      <div className="flex flex-col items-end justify-start w-[7%] sm:w-full gap-[30px]">
                        <div className="flex flex-row justify-start items-center w-full gap-2">
                          <Text size="s" as="p" className="text-right text-[13px] font-normal">
                            800
                          </Text>
                          <div className="h-px w-[16%] bg-blue_gray-400" />
                        </div>
                        <div className="flex flex-row justify-start items-center w-full gap-2">
                          <Text size="s" as="p" className="text-right text-[13px] font-normal">
                            600
                          </Text>
                          <div className="h-px w-[16%] bg-blue_gray-400" />
                        </div>
                        <div className="flex flex-row justify-start items-center w-full gap-2">
                          <Text size="s" as="p" className="text-right text-[13px] font-normal">
                            400
                          </Text>
                          <div className="h-px w-[16%] bg-blue_gray-400" />
                        </div>
                        <div className="flex flex-row justify-start items-center w-[95%] md:w-full gap-[7px]">
                          <Text size="s" as="p" className="text-right text-[13px] font-normal">
                            200
                          </Text>
                          <div className="h-px w-[17%] bg-blue_gray-400" />
                        </div>
                        <div className="flex flex-row justify-start items-center w-[57%] md:w-full gap-2">
                          <Text size="xs" as="p" className="text-right text-xs font-normal">
                            0
                          </Text>
                          <div className="h-px w-[28%] bg-blue_gray-400" />
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start w-[94%] sm:w-full mt-[7px] ml-[-1px] gap-px sm:ml-0 sm:mt-0">
                        <div className="h-[185px] w-full relative">
                          <Img
                            src="images/img_group_gray_100_02.svg"
                            alt="image_two"
                            className="justify-center h-[185px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                          />
                          <Img
                            src="images/img_vector_indigo_600_01_177x547.png"
                            alt="vector"
                            className="justify-center h-[177px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                          />
                        </div>
                        <div className="flex flex-row justify-start w-[91%] md:w-full">
                          <div className="flex flex-col items-center justify-start w-full gap-1">
                            <div className="flex flex-row justify-between w-[95%] md:w-full">
                              <Img src="images/img_group_blue_gray_400.svg" alt="image_three" className="h-[4px]" />
                              <Img src="images/img_group_blue_gray_400.svg" alt="image_four" className="h-[4px]" />
                              <Img src="images/img_group_blue_gray_400.svg" alt="image_five" className="h-[4px]" />
                              <Img src="images/img_group_blue_gray_400.svg" alt="image_six" className="h-[4px]" />
                              <Img src="images/img_group_blue_gray_400.svg" alt="image_seven" className="h-[4px]" />
                              <Img src="images/img_group_blue_gray_400.svg" alt="image_eight" className="h-[4px]" />
                              <Img src="images/img_group_blue_gray_400.svg" alt="image_nine" className="h-[4px]" />
                            </div>
                            <div className="flex flex-row sm:flex-col justify-between w-full sm:gap-10">
                              <div className="flex flex-row justify-between w-auto gap-[50px]">
                                <Text size="md" as="p" className="h-[17px] mb-px text-sm font-normal">
                                  Jul
                                </Text>
                                <Text size="md" as="p" className="text-sm font-normal">
                                  Aug
                                </Text>
                              </div>
                              <div className="flex flex-row justify-between w-auto">
                                <Text size="md" as="p" className="text-sm font-normal">
                                  Sep
                                </Text>
                                <Text size="md" as="p" className="text-sm font-normal">
                                  Oct
                                </Text>
                                <Text size="md" as="p" className="text-sm font-normal">
                                  Nov{" "}
                                </Text>
                                <Text size="md" as="p" className="text-sm font-normal">
                                  Dec
                                </Text>
                                <Text size="md" as="p" className="text-sm font-normal">
                                  Jan
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
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
