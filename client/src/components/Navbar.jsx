"use client";

import { Home, MessagesSquare, Settings, Upload } from "lucide-react";
import React, { useEffect } from "react";

const CustomNavbar = () => {
  useEffect(() => {
    const expand_btn = document.querySelector(".expand-btn");

    let activeIndex;
    let collapsed = true;

    const bothLine = document.querySelector(".doubleLine");
    const firstLine = document.querySelector(".firstLine");
    const secondLine = document.querySelector(".secondLine");

    expand_btn.addEventListener("click", () => {
      if (collapsed) {
        collapsed = false;
        bothLine.classList.add("px-6");
        firstLine.classList.remove("w-8");
        firstLine.classList.add("w-16");
        secondLine.classList.remove("w-4");
        secondLine.classList.add("w-8");
        document.body.classList.remove("collapsed");
      } else {
        collapsed = true;
        bothLine.classList.remove("px-6");
        firstLine.classList.remove("w-16");
        firstLine.classList.add("w-8");
        secondLine.classList.remove("w-8");
        secondLine.classList.add("w-4");
        document.body.classList.add("collapsed");
      }
    });

    const current = window.location.href;

    const allLinks = document.querySelectorAll(".sidebar-links a");

    allLinks.forEach((elem) => {
      elem.addEventListener("click", function () {
        const hrefLinkClick = elem.href;

        allLinks.forEach((link) => {
          if (link.href == hrefLinkClick) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        });
      });
    });
  }, []);
  return (
    <div className="h-screen">
      <nav className="sidebar h-full">
        <div className="sidebar-top-wrapper">
          <button className="expand-btn" type="button">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path
                d="M6.00979 2.72L10.3565 7.06667C10.8698 7.58 10.8698 8.42 10.3565 8.93333L6.00979 13.28"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
        <div className="sidebar-links-wrapper h-full">
          <div className="sidebar-links flex flex-col justify-between h-full">
            <div className=" py-4 doubleLine flex justify-center items-center flex-col gap-[4px] ">
              <div className="flex gap-1 flex-col">
                <div className="h-1 w-8 rounded-l-full firstLine rounded-r-full bg-black"></div>
                <div className="h-1 w-4 rounded-l-full secondLine rounded-r-full bg-black"></div>
              </div>
            </div>
            <ul>
              <li>
                <a href="#home" title="Home" className="tooltip">
                  <Home />
                  <span className="link hide">Home</span>
                </a>
              </li>
              <li>
                <a href="#chat" title="Chat" className="tooltip">
                  <MessagesSquare />
                  <span className="link hide">Chat</span>
                </a>
              </li>
              <li>
                <a href="upload-project" title="Upload" className="tooltip">
                  <Upload />
                  <span className="link hide">Upload</span>
                </a>
              </li>
              <li>
                <a href="Setting" title="Setting" className="tooltip">
                  <Settings />
                  <span className="link hide">Setting</span>
                </a>
              </li>
            </ul>
            <div className="mb-6 flex justify-center">
              <label className="items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-black"></div>
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default CustomNavbar;
