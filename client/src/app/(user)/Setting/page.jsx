"use client";

import React from "react";
import { Input } from "../../../components/ui/input";
import General from "@/components/setting-items/General";
import EditProfile from "@/components/setting-items/EditProfile";
import Password from "@/components/setting-items/Password";
import Help from "@/components/setting-items/help";
import Terms from "@/components/setting-items/Terms";
import Delete from "@/components/setting-items/Delete";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const Setting = () => {
  const items = [
    {
      name: "General",
      component: General,
      href: "general",
    },
    {
      name: "Edit profile",
      component: EditProfile,
      href: "edit",
    },
    {
      name: "Password",
      component: Password,
      href: "password",
    },
    {
      name: "Help",
      component: Help,
      href: "help",
    },
    {
      name: "Terms",
      component: Terms,
      href: "terms",
    },
    {
      name: "Delete",
      desc: "delete your account",
      href: "Delete",
    },
  ];

  const query = useSearchParams();
  const href = query.get("href");

  return (
    <div className="bg-white h-full px-40 py-20 flex justify-center">
      <div>
        <div className="flex p-4 rounded-3xl items-center justify-start gap-4">
          <div className="rounded-full h-10 w-10 flex justify-center items-center text-xl text-white bg-green-800">S</div>
          <div>
            <div className="">
              sahil thakur <span className="px-2 text-gray-300">/</span>
              {items.map((item) => {
                if (item.href === href) return item.name;
              })}
            </div>
            <div className="text-gray-500">
              {items.map((item) => {
                if (item.href === href) return item.desc;
              })}
            </div>
          </div>
        </div>
        <div className="flex gap-20 mt-6">
          <div className=" h-[400px] flex flex-col gap-3 rounded-2xl text-gray-500">
            {items.map((item) => {
              return (
                <Link
                  href={`${item.href === 'Delete' ? 'Setting/Delete' : `?href=${item.href}`}`}
                  className={` ${item.href === 'delete' ? 'text-red-500 hover:text-red-400' : 'hover:text-slate-800'}  justify-start ${
                    href === item.href ? "font-bold text-black" : null
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
          <div>
            {items.map((item) => {
              if (item.href === href) {
                return <item.component />;
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
