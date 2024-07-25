import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import YouTubeIcon from "@mui/icons-material/YouTube";
import NavbarMiddleSection from "./NavBarMiddleSection/NavbarMiddleSection";
import ThemeSwitch from "./ThemeSwitch/ThemeSwitch";

const NavBar = () => {
  return (
    <div className="h-[3.75rem] fixed top-0 left-0  w-full z-10 dark:bg-darkHomeBg bg-lightHomeBg  dark:text-darkText text-lightText">
      {/* Desktop Content */}
      <div className="md:flex hidden justify-between items-center p-3 h-full">
        {/* Left Side */}
        <div className="flex items-center ">
          <button className="mr-5">
            <MenuIcon className="text-[30px]" />
          </button>

          <div className="flex items-center">
            <button className=" text-tubeRed mr-1">
              <YouTubeIcon className="text-[1.875rem]" />
            </button>
            <h1 className="text-[1.1875rem] font-semibold">Youtube</h1>
          </div>
        </div>

        {/* Middle */}
        <NavbarMiddleSection />

        {/* Right Side */}
        <div className="flex items-center"><ThemeSwitch /></div>
      </div>
    </div>
  );
};

export default NavBar;
