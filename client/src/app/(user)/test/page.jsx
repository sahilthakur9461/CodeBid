import { Bell, Search, User } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <div className="bg-[#ffffff] h-screen flex">
      <div className="w-full">
        <nav className="py-3 w-full px-8">
          <div className=" flex justify-between">
            <div className="relative rounded-l-full rounded-r-full bg-gradient-to-r from-[#EFDF52]/50 to-[#E81FE0]/50 p-[0.5px]">
              <input
                type="text"
                placeholder="Search"
                className=" text-white outline-none placeholder-opacity-40	 placeholder-white py-[4px] pl-10 bg-[#393534] rounded-r-full  rounded-l-full "
              />
              <Search className="text-white absolute top-[5px] left-2" />
            </div>
            <div className="flex  gap-4">
              <div className=" bg-[#D9D9D9]/30 rounded-full h-fit p-1">
                <Bell className="text-white" />
              </div>
              <div className=" bg-white rounded-full h-fit p-1">
                <User className="text-black " />
              </div>
            </div>
          </div>
          <div className="w-full flex ">
            <div className="mx-auto flex gap-9 font-['Poppins']">
              <div className="text-white">Followers</div>
              <div className="text-white ">Following</div>
            </div>
          </div>
        </nav>
        <div className="flex w-full justify-between px-8 py-2">
            <div className="bg-[#282627] w-[600px] h-[480px] rounded-3xl"></div>
            <div className="flex flex-col gap-10 mx-8"> 
                <div className="bg-[#282627] w-[400px] h-[480px] rounded-3xl  "></div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default page;
