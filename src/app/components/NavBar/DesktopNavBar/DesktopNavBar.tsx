import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import YouTubeIcon from "@mui/icons-material/YouTube";
import NavbarMiddleSection from "../NavBarMiddleSection/NavbarMiddleSection";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const DesktopNavBar = () => {
  return (
    <div className="sm:flex hidden justify-between items-center p-3 h-full">
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
      <div className="flex items-center  ">
        <VideoCallIcon className="mr-2" />
        <NotificationsIcon className="mx-2" />
        <AccountCircleIcon className="ml-2 text-[30px]" />
      </div>
    </div>
  );
};

export default DesktopNavBar;
