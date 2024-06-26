import Button from "./components/Button"
import { IoIosNotificationsOutline } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BsSuitcaseLg } from "react-icons/bs";
import { LuMessageSquare, LuUserCheck } from "react-icons/lu";
import { RiHandCoinLine, RiDeleteBin5Line } from "react-icons/ri";
import { GoDotFill, GoPencil } from "react-icons/go";
import DotIcon from "./components/dot";
import { GrLocation } from "react-icons/gr";
import { LiaCoinsSolid } from "react-icons/lia";
import { CgFigma } from "react-icons/cg";
import { SiAdobeillustrator, SiAdobexd } from "react-icons/si";
import { HiOutlineUsers } from "react-icons/hi2";
import { FiMessageSquare } from "react-icons/fi";
import { IoEyeOutline } from "react-icons/io5";

function App() {
  return (
    
    <>
      <div className="flex flex-wrap w-[1728px] h-[1328px] bg-[#FCFCFC] ">
        <div className="w-[1728px] h-[1328px] bg-white">

          <div className="h-[80px] w-[1728px]">
            
            <div className="flex justify-between items-center h-[61px] w-[1664] mt-[24px] ml-[40px] mr-[30px] ">
              <div className="h-[61px] w-[100px] px-[28px] py-[15px] font-bold bg-[#E7E7E7]"><span className="hp[27px] w-[47px] font-[700px] text-[#DC4A2D]">Logo</span></div>

              <div className="h-[74px] w-[538px] flex justify-between px-[28px] py-[9px]">
                <div className="h-[62px] w-[578px] border-[0.5px] rounded-[36px] flex justify-between ">
                {/* 3 buttons */}
               
                <div className="h-[58px] w-[109px] py-2 ml-2">
                <Button icon={BsSuitcaseLg} text="Jobs" textColor="white" className= "bg-red-600 flex items-center space-x-2 p-2 border-2 rounded-[49px] hover:bg-gray-100 font-[500]" />
                </div>
                <div className="h-[58px] w-[109px] py-2">
                  <Button icon={LuMessageSquare} text="Messages" textColor="gray" className="bg-white border-none font-[500]" />
                </div>
                <div className="h-[58px] w-[109px] py-2 mr-2">
                  <Button icon={RiHandCoinLine} text="Payments" textColor="gray" className="bg-white border-none font-[500]" />
                </div>
                </div>
              </div>
              <div className="flex justify-between items-center h-[60px] w-[134px] px-[15px] py-[9px] gap-2 ">
              <div className="flex justify-center items-center h-[32px] w-[32px]">
                  {/* icon bell */}
                  <IoIosNotificationsOutline className="size-[55px]" />
                </div>
                <div className="flex justify-center h-[40px] w-[66px]">
                  <div className="h-[40px] w-[40px] rounded-[60px] ">
                    <img src="https://cdn.icon-icons.com/icons2/2407/PNG/512/atlassian_icon_146225.png" alt="" />
                </div>
                <RiArrowDropDownLine className="h-[20px] w-[20px] mt-2"/>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className=" h-[67px] w-[1728px] mt-2 pt-4">
            <div className="h-[27px] w-[590px] flex justify-between ml-[100px] ">
              <span className="w-[117px] h-[27px] font-[600] text-[#DC4A2D]">Job Preview</span>
              <span className="w-[117px] h-[27px] font-[600] text-[#DC4A2D]">Application</span>
              <span className="w-[117px] h-[27px] font-[600] text-[#DC4A2D]">Match</span>
              <span className="w-[117px] h-[27px] font-[600] text-[#DC4A2D]">Messages</span>
            </div>
          </div>
          <hr />
          {/* third section */}
          <div className="h-[1050px] w-[1728px] flex justify-between ">
            
            <div className="">
            {/* whole container */}
            <div className="h-[98px] w-[623px] ml-[100px]  gap-[12px]  flex flex-col mt-4">
              <div className="h-[47px] w-[623px] flex justify-between items-center ">
                <h1 className="h-[47px] w-[409px] font-[600] text-[#3D3D3D] text-[35px] mt-3">Senior Product Designer</h1>
                <DotIcon fill="gray" className="mt-4"/>
                <span className="h-[19px] w-[117px] text-[14px] mt-4 text-gray-500 ">posted 2 days ago</span>
                <div className="h-[22px] w-57px]">
                  <Button icon={DotIcon} text="Open" textColor="green" className="border-green-400 py-2 " />
                </div>
              </div>
              <div className=" h-[27px] w-[363px] mb-0 flex items-center">
                <GrLocation className="size-[24px]"/>
                <span className="text-[20px] font-[500] text-[#5D5D5D] ml-3">Delaware, USA</span>
                <span className="ml-4"> <DotIcon fill="gray"/> </span>
                <LiaCoinsSolid className="h-[24px] w-[24px] ml-4 "/>
                <span className="text-[20px] font-[500] text-[#5D5D5D] ml-2">$300k-$400k</span>
              </div>
            </div>
            <hr className="border-2 border-[#E7E7E7] h-[1px] w-[1319px] mt-[15px]"/>
            <div className="h-[115px] w-[872px] ml-[100px] gap-[64px]  flex mt-[30px]">
              <div className=" flex flex-col h-[115px] w-[170px] gap-[6px] ">
                <h3 className="text-[14px] font-[500] text-[#6E6D6D]">Skills Required</h3>
                <div className="h-[88px] w-[126.41px] gap-[8px] flex flex-col  ">
                  <div className="flex h-[25px] w-[66px] border border-[#D0D5DD] rounded-[4px] gap-[3px]">
                    <CgFigma className="size-[16px] mt-[3px]"/> 
                    <span className="py-0 text-[12px] font-[500] items-center ml-0">Figma</span>
                  </div>
                  <div className="flex h-[25px] w-[126,41px] border border-[#D0D5DD] rounded-[4px] gap-[3px]">
                  <SiAdobeillustrator className="size-[16px] mt-[3px]" />
                    <span className="py-0 text-[12px] font-[500] items-center ml-0">Adobe Illustrator</span>
                  </div>
                  <div className="flex h-[25px] w-[88.41px] border border-[#D0D5DD] rounded-[4px] gap-[3px]">
                    <SiAdobexd className="size-[16px] mt-[3px]"/> 
                    <span className="py-0 text-[12px] font-[500] items-center ml-0">Adobe XD</span>
                  </div>
                </div>
              </div>
              <div className="h-[49px] w-[170px] gap-[4px] flex flex-col">
                <span className="text-[#6E6D6D] text-[14px] font-[500]">Preferred Language</span>
                <span className="text-[#3D3D3D
] text-16px] font-[600]">English</span>
              </div>
              <div className="h-[49px] w-[170px] gap-[4px] flex flex-col">
              <span className="text-[#6E6D6D] text-[14px] font-[500]">Type</span>
                <span className="text-[#3D3D3D
] text-16px] font-[600]">Full Time</span>
              </div>
              <div className="h-[49px] w-[170px] gap-[4px] flex flex-col">
              <span className="text-[#6E6D6D] text-[14px] font-[500]">Years of Experience</span>
                <span className="text-[#3D3D3D
] text-16px] font-[600]">3+ Years of Experience</span>
              </div>

            </div>
            <hr className="border-2 border-[#E7E7E7] h-[1px] w-[1319px] mt-[30px]"/>
            {/* content div  */}
            <div className="h-[401px] w-[526px] ml-[100px] mt-[30px] flex flex-col">
              <span className="text-[16px] font-[500] text-[#6E6D6D]">About the job</span>
              <div className="flex flex-col h-[374px] w-[526px] gap-[8px]">
                <ol className="text-[16px] font-[500] text[#3D3D3D]">
                  <li>1. Handle the UI/UX research design</li>
                  <li>2. Work on researching on latest web applications, designs & trends</li>
                  <li>3. Work on conceptualizing and visualizing</li>
                  <li>4. Work on creating graphics content and other graphic related works</li>
                </ol>
                <h4 className="text-[16px] font-[500] text[#3D3D3D]">Benefits: </h4>
                <ul className="text-[16px] font-[500] text[#3D3D3D]">
                  <li className="flex items-center"> <GoDotFill className="size-[8px] m-1"/> Health insurance</li>
                  <li className="flex items-center"> <GoDotFill className="size-[8px] m-1"/>Provident Fund</li>
                </ul>
                <h4 className="text-[16px] font-[500] text[#3D3D3D]">Schedule: </h4>
                <ul className="text-[16px] font-[500] text[#3D3D3D]">
                  <li className="flex items-center"> <GoDotFill className="size-[8px] m-1"/>Day Shift</li>
                </ul>
                <h4 className="text-[16px] font-[500] text[#3D3D3D]">Supplemental pay types:</h4>
                <ul className="text-[16px] font-[500] text[#3D3D3D]">
                  <li className="flex items-center"> <GoDotFill className="size-[8px] m-1"/>Performance bonus</li>
                  <li className="flex items-center"><GoDotFill className="size-[8px] m-1"/>Yearly bonus</li>
                </ul>
                <h4 className="text-[16px] font-[500] text[#3D3D3D]">Work location: In person</h4>
              </div>
            </div>
            <hr className="border-2 border-[#E7E7E7] h-[1px] w-[1319px] mt-[15px]"/>
            {/* Last section */}
            <div className="h-[271px] w-[736px] ml-[100px] gap-[16px] flex flex-col mt-8">
              <div className="h-[60px] w-[148px] flex p-[10px] pl-0 gap-[12px]">
                <div className="size-[40px] rounded-[4px]"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr42lt0uL4-RkQGD5AoUhQGn4OGr-foggxTQ&s" alt="atlassian" /></div>
                <span className="text-[20px] font-[500] text-[#4F4F4F] w-[86px] h-[27px]">Atlassian</span>
              </div>
              <div className="w-[736px] h-[195px] flex justify-between flex-wrap">
                <div className="w-[344px] h-[49px] gap-[8px] flex flex-col">
                  <span className="w-[92px] h-[19px] text-[14px] font-[500] text-[#6E6D6D]">Company size</span>
                  <span className="text-[16px] font-[500] text-[#3D3D3D]">1k-2k Employees</span>
                </div>
                <div className="w-[344px] h-[49px] gap-[8px] flex flex-col">
                <span className="w-[92px] h-[19px] text-[14px] font-[500] text-[#6E6D6D]">Type</span>
                <span className="text-[16px] font-[500] text-[#3D3D3D]">Private</span>
                </div>
                <div className="w-[344px] h-[49px] gap-[8px] flex flex-col">
                <span className="w-[92px] h-[19px] text-[14px] font-[500] text-[#6E6D6D]">Sector</span>
                <span className="text-[16px] font-[500] text-[#3D3D3D]">Information Technology, Infrastructure</span>
                </div>
                <div className="w-[344px] h-[49px] gap-[8px] flex flex-col">
                <span className="w-[92px] h-[19px] text-[14px] font-[500] text-[#6E6D6D]">Funding</span>
                <span className="text-[16px] font-[500] text-[#3D3D3D]">Bootstrapped</span>
                </div>
                <div className="w-[344px] h-[49px] gap-[8px] flex flex-col">
                <span className="w-[92px] h-[19px] text-[14px] font-[500] text-[#6E6D6D]">Founded in</span>
                <span className="text-[16px] font-[500] text-[#3D3D3D]">2019</span>
                </div>
                <div className="w-[344px] h-[49px] gap-[8px] flex flex-col">
                <span className="w-[92px] h-[19px] text-[14px] font-[500] text-[#6E6D6D]">Founded By</span>
                <span className="text-[16px] font-[500] text-[#3D3D3D]">Scott Farquhar, Mike Cannon-Brooks</span>
                </div>

              </div>
              
            </div>

            </div>
            <div className="w-[409px] h-[1050px] mt-0 ml-[2px] flex flex-col">
              <div className="flex h-[46px] w-[360px] gap-[16px] m-5">
                {/* for buttons */}
                <div className="h-[46px] w-[172px] rounded-[8px] border-[0.8px] border-[#DC4A2D] flex justify-center items-center">
                <Button icon={RiDeleteBin5Line} text="Delete Job" className="font-[500] text-[16px] text-[#DC4A2D] border-none"/>
                </div>
                <div className="h-[46px] w-[172px] rounded-[8px] border-[0.8px] border-[#DC4A2D] flex justify-center items-center bg-[#DC4A2D]">
                <Button icon={GoPencil} text="Edit Job" textColor="white" className="font-[500] text-[16px] text-white border-none"/>
                </div>

              </div>
              <div className="h-[291px] w-[360px] p-[12px] m-5 mt-2 flex flex-col gap-[16px]">
                {/* below div */}
                <div className="h-[42px] w-[336px] flex justify-between">
                  <div className="w-[135px] h-[42px] p-[10px] flex" >
                      <HiOutlineUsers className="h-[20px] w-[20px] ml-[1.67px] mt-[2px]"/>
                      <span className="h-[22px] w-[81px] font-[500] text-[16px] text-[#4F4F4F] ml-1">Applicants</span>
                  </div>
                  <div className="h-[39px] w-[57px] py-[6px] px-[10px] text-[20px] font-[600] text-[#3D3D3D]">400</div>
                </div>
                <div className="h-[42px] w-[336px] flex justify-between">
                  <div className="w-[135px] h-[42px] p-[10px] flex" >
                      <LuUserCheck className="h-[20px] w-[20px] ml-[1.67px] mt-[2px]"/>
                      <span className="h-[22px] w-[81px] font-[500] text-[16px] text-[#4F4F4F] ml-1">Matches</span>
                  </div>
                  <div className="h-[39px] w-[57px] py-[6px] px-[10px] text-[20px] font-[600] text-[#3D3D3D]">100</div>
                </div>
                <div className="h-[42px] w-[336px] flex justify-between ">
                  <div className="w-[135px] h-[42px] p-[10px] flex" >
                      <FiMessageSquare className="h-[20px] w-[20px] ml-[1.67px] mt-[2px]"/>
                      <span className="h-[22px] w-[81px] font-[500] text-[16px] text-[#4F4F4F] ml-1">Messages</span>
                  </div>
                  <div className="h-[39px] w-[57px] py-[6px] px-[10px] text-[20px] font-[600] text-[#3D3D3D]">147</div>
                </div>
                <div className="h-[42px] w-[336px] flex justify-between ">
                  <div className="w-[135px] h-[42px] p-[10px] flex" >
                      <IoEyeOutline className="h-[20px] w-[20px] ml-[1.67px] mt-[2px]"/>
                      <span className="h-[22px] w-[81px] font-[500] text-[16px] text-[#4F4F4F] ml-1">Views</span>
                  </div>
                  <div className="h-[39px] w-[57px] py-[6px] px-[10px] text-[20px] font-[600] text-[#3D3D3D]">800</div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
