"use client";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import YouTubeIcon from "@mui/icons-material/YouTube";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { assertIsNode } from "@/utils/assertTargetIsNode/assertTargetIsNode";
import { twMerge } from "tailwind-merge";
import NavBarSearchInput from "../NavBarSearchInput/NavBarSearchInput";

const MobileNavBar = () => {
  const [openSearchBar, setOpenSearchBar] = React.useState(false);

  const inputRef = React.useRef<HTMLInputElement>(null);
  const [showSearchIconInsideInput, setShowSearchIconInsideInput] = React.useState(false);

  const [focused, setFocused] = React.useState(false);


  const handleClick = (e: MouseEvent) => {
    assertIsNode(e.target);
    if (inputRef.current && inputRef.current.contains(e.target)) {
      setShowSearchIconInsideInput(true);
    } else {
      setShowSearchIconInsideInput(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("click", handleClick, true);
    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  });

  return (
    <>
      {openSearchBar ? (
        // If user clicks on search icon ... show input
        <div className="flex sm:hidden items-center p-3 h-full gap-2">
          <ArrowBackIcon onClick={() => setOpenSearchBar(false)} />
          {/* Input Div */}
          <NavBarSearchInput showSearchIconInsideInput={showSearchIconInsideInput} inputRef={inputRef} focusOnRender={true} focused={focused} setFocused={setFocused}/>
        </div>
      ) : (
        // Default Mobile View
        <div className="flex sm:hidden justify-between items-center p-3 h-full">
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
          <div className="flex items-center gap-4">
            <SearchIcon onClick={() => setOpenSearchBar(true)} />
            <MicIcon className="min-[430px]:inline-block hidden" />
            <VideoCallIcon />
            <NotificationsIcon className="min-[430px]:inline-block hidden" />
            <AccountCircleIcon className="text-[30px]" />
          </div>
        </div>
      )}
    </>
  );
};

export default MobileNavBar;
