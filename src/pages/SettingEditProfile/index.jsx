import React,{useState,useEffect} from "react";
import { Helmet } from "react-helmet";
import { Button, Input, Text, SelectBox, Img } from "../../components";
import Header from "../../components/Header";
import Sidebar1 from "../../components/Sidebar1";
import { Link } from "@mui/material";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function SettingEditProfilePage() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/finduser/${localStorage.email}`);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const jsonData = await response.json();
      console.log(jsonData.data);
      setData(jsonData.data);

    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };


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
          <div className="flex flex-row justify-center w-[94%] md:w-full">
            <div className="flex flex-col items-center justify-start w-full gap-[51px] p-[30px] sm:p-5 bg-white-A700 rounded-[25px]">
              <div className="flex flex-col items-start justify-start w-full mt-1.5">
                <div className="flex flex-row sm:flex-col justify-start items-start w-[39%] md:w-full sm:gap-5 z-[1]">
                  <div className="flex flex-col items-center justify-start w-[29%] sm:w-full gap-2">
                    <Text as="p" className="!text-indigo-600_01 text-base font-medium">
                    User Profile
                    </Text>

                  </div>
                  
                </div>
                <div className="h-px w-full mt-[-1px] bg-gray-300" />
              </div>
              <div className="flex flex-row md:flex-col justify-between items-start w-full md:gap-10">
                <div className="flex flex-row justify-center w-[13%] md:w-full mt-[3px] md:mt-0">
                  <div className="flex flex-row justify-center items-center w-full">
                    <Img
                      src="https://cdn.iconscout.com/icon/premium/png-512-thumb/profile-3133172-2606620.png?f=webp&w=256"
                      alt="circleimage_one"
                      className="h-[130px] w-[130px] md:h-auto rounded-[50%]"
                    />
                   
                  </div>
                </div>
                <div className="flex flex-col items-end justify-start w-[83%] md:w-full">
                  <div className="flex flex-row md:flex-col justify-start w-full gap-[29px] md:gap-5">
                   
                    <div className="flex flex-col items-start justify-start w-[49%] md:w-full gap-2.5">
                      <Text as="p" className="text-base font-normal">
                        User Name
                      </Text>
                      <Input
                        shape="round"
                        name="userName"
                        placeholder={data.name}
                        className="w-full sm:w-full border-gray-300 border border-solid"
                        disabled
                      />
                    </div>
                  </div>
                  <div className="flex flex-row md:flex-col justify-start w-full mt-[21px] gap-[29px] md:gap-5">
                    <div className="flex flex-col items-start justify-start w-[49%] md:w-full gap-2.5">
                      <Text as="p" className="text-base font-normal">
                        Email
                      </Text>
                      <Input
                        shape="round"
                        name="email"
                        placeholder={data.email}
                        className="w-full sm:w-full border-gray-300 border border-solid"
                        disabled
                      />
                    </div>
                    
                  </div>
                  <div className="flex flex-row md:flex-col justify-start w-full mt-[21px] gap-[29px] md:gap-5">
                    <div className="flex flex-col items-start justify-start w-[49%] md:w-full gap-2.5">
                      <Text as="p" className="text-base font-normal">
                        Date of Birth
                      </Text>
                      <Input
                        shape="round"
                        name="date"
                        placeholder={data.date}
                        className="w-full sm:w-full border-gray-300 border border-solid"
                        disabled
                      />
                    </div>
                    
                  </div>
                  <div className="flex flex-row md:flex-col justify-start items-center w-full mt-[21px] gap-[29px] md:gap-5">
                    <div className="flex flex-col items-start justify-start w-[49%] md:w-full gap-2.5">
                      <Text as="p" className="text-base font-normal">
                        Present Address
                      </Text>
                      <Input
                        shape="round"
                        name="address"
                        placeholder={data.address}
                        className="w-full sm:w-full border-gray-300 border border-solid"
                        disabled
                      />
                    </div>
                  </div>
                  <div className="flex flex-row md:flex-col justify-start items-center w-full mt-[21px] gap-[29px] md:gap-5">
                    <div className="flex flex-col items-start justify-start w-[49%] md:w-full gap-[9px]">
                      <Text as="p" className="text-base font-normal">
                        City
                      </Text>
                      <Input
                        shape="round"
                        name="city"
                        placeholder={data.city}
                        className="w-full sm:w-full border-gray-300 border border-solid"
                        disabled
                      />
                    </div>
                  </div>
                  <div className="flex flex-row md:flex-col justify-start items-center w-full mt-[21px] gap-[29px] md:gap-5">
                    <div className="flex flex-col items-start justify-start w-[49%] md:w-full gap-[9px]">
                      <Text as="p" className="text-base font-normal">
                        Country
                      </Text>
                      <Input
                        shape="round"
                        name="country"
                        placeholder={data.country}
                        className="w-full sm:w-full border-gray-300 border border-solid"
                        disabled
                      />
                    </div>
                  </div>
                  <div className="flex flex-row md:flex-col justify-start items-center w-full mt-[21px] gap-[29px] md:gap-5">
                    <div className="flex flex-col items-start justify-start w-[49%] md:w-full gap-2.5">
                      <Text as="p" className="text-base font-normal">
                        Postal Code
                      </Text>
                      <Input
                        shape="round"
                        name="zipcode"
                        placeholder={data.postalCode}
                        className="w-full sm:w-full border-gray-300 border border-solid"
                        disabled
                      />
                    </div>
                    
                  </div>
                  <Link  href="/editprofile">
                  <Button
                    color="indigo_600_01"
                    size="lg"
                    className="mt-[30px] sm:px-5 font-medium min-w-[190px] rounded-[15px] sm:min-w-full"
                  >
                 Edit or Update Profile
                   
                  </Button>
                  </Link> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
