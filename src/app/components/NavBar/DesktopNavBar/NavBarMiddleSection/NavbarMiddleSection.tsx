"use client";
import { assertIsNode } from "@/utils/assertTargetIsNode/assertTargetIsNode";
import React from "react";
import MicIcon from "@mui/icons-material/Mic";
import NavBarSearchInput from "../../NavBarSearchInput/NavBarSearchInput";



const NavbarMiddleSection = () => {
  
  return (
    <div className="flex items-center justify-center grow lg:max-w-[600px] h-[3rem] lg:mx-0 mx-5  p-1">
      {/* Content */}
      <div className="flex items-center h-full w-full">

        {/* Input Div */}
        <NavBarSearchInput  focusOnRender={false}/>

        {/* Mic Icon */}
        <button className=" rounded-full bg-gray-300/30 dark:bg-[#343434c3] h-[40px] w-[45px] p-1 ml-[1rem]"><MicIcon className=""/></button>
      </div>
    </div>
  );
};

export default NavbarMiddleSection;



