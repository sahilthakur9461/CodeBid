import {
  Bell,
  Home,
  MessageSquare,
  Search,
  Settings,
  Upload,
  User,
} from "lucide-react";
import React from "react";
import { Switch } from "@/components/ui/switch";

const page = () => {
  return (
    <div className="bg-[#211F22] h-screen flex">
      <div className="bg-[#0F0D0E]  py-4 px-6 flex flex-col justify-between">
        <div className="flex flex-col gap-[4px]">
          <div className="w-14 h-1 rounded-r-full rounded-l-full bg-white"></div>
          <div className="w-8 h-1 rounded-r-full rounded-l-full bg-white"></div>
        </div>
        <div className="flex flex-col gap-4">
          <Home className="h-8 w-8 text-white/70" />
          <MessageSquare className="h-8 w-8 text-white/70" />
          <Upload className="h-8 w-8 text-white/70" />
          <Settings className="h-8 w-8 text-white/70" />
        </div>
        <div>
          <Switch />
        </div>
      </div>
      <div className="w-full">
        <nav className="py-3 px-8 w-full">
          <div className="flex justify-between">
            <div className="relative rounded-l-full rounded-r-full bg-gradient-to-r from-[#EFDF52]/50 to-[#E81FE0]/50 p-[0.5px]">
              <input
                type="text"
                placeholder="Search"
                className=" text-white outline-none placeholder-opacity-40 placeholder-white py-[4px] pl-10 bg-[#393534] rounded-r-full  rounded-l-full "
              />
              <Search className="text-white absolute top-[5px] left-2" />
            </div>
            <div className="flex  gap-4 ">
              <div className=" bg-[#D9D9D9]/30 rounded-full h-fit p-1">
                <Bell className="text-white" />
              </div>
              <div className=" bg-white rounded-full h-fit p-1">
                <User className="text-black " />
              </div>
            </div>
          </div>
        </nav>
        <div className="flex w-full justify-between px-8 py-2">
          <div className=" bg-gradient-to-r from-[#EFDF52]/50 to-[#E81FE0]/50 p-[1px] rounded-3xl">
            <div className="bg-[#282627] w-[700px] h-[480px] rounded-3xl p-4 flex flex-col">
              <div className=" bg-gradient-to-r from-[#EFDF52]/50 to-[#E81FE0]/50 p-[1px] rounded-3xl">
                <div className="bg-[#282627] rounded-3xl h-[250px] p-8">
                  <div className="bg-black w-[120px] h-[120px] rounded-full"></div>
                </div>
              </div>
              <div className="h-full">
                <div className="w-fit flex h-full p-4">
                  <div className=" bg-gradient-to-r from-[#EFDF52]/50 to-[#E81FE0]/50 p-[1px] rounded-3xl h-full">
                    <div className="w-[260px] h-full">
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-10 mx-8">
            <div className=" bg-gradient-to-r from-[#EFDF52]/50 to-[#E81FE0]/50 p-[1px] rounded-3xl">
              <div className="bg-[#282627] w-[300px] h-[480px] rounded-3xl  "></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
