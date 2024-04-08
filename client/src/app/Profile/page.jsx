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
import Navbar from "@/components/Navbar";

const page = () => {
  return (
    <div className="flex">
      <div className="flex  justify-center items-center w-full flex-col px-4 ">
        <div className="flex">
          <div className="flex gap-10">
            <div className="bg-black rounded-full w-40 h-40 hover:bg-red-600">
              <div className="font-extrabold p-14"></div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex gap-20">
                <div className="font-bold text-sm">Tarun_</div>
                <div>
                  <Settings className="h-6 w-6 text-black" />
                </div>
              </div>
              <div className="flex gap-4 text-sm">
                <div className="font-light">
                  <span className="text-sm font-normal">14</span> Project
                </div>
                <div className="font-light text-sm">
                  <span className="text-sm font-normal">10</span> Following
                </div>
              </div>
              <div>Tarun</div>
              <div className="flex  flex-col gap-1">
                <div className="font-semibold">Bio</div>
                <div className="max-w-[350px] text-sm">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Dolorum id
                </div>
                <button className="w-fit rounded-lg text-xs bg-gray-300 px-2 py-1 font-bold hover:bg-slate-600">
                  Edit profile
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[0.5px] bg-black w-full mt-6 mb-3"></div>
        <div className="font-normal mb-2 hover:font-semibold">Project</div>
        <div className="px-6 flex gap-2 flex-wrap">
          <div className="h-[250px] w-[350px] bg-black hover:bg-amber-500">
            <div className="font-extrabold p-32"></div>
          </div>
          <div className="h-[250px] w-[350px] bg-black hover:bg-red-500">
            <div className="font-extrabold p-32"></div>
          </div>
          <div className="h-[250px] w-[350px] bg-black hover:bg-blue-500">
            <div className="font-extrabold p-32"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
