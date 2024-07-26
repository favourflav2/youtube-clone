"use client";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import YouTubeIcon from "@mui/icons-material/YouTube";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import NavBarSearchInput from "../NavBarSearchInput/NavBarSearchInput";
import MobileRightSection from "./MobileRightSection/MobileRightSection";


const MobileNavBar = () => {
  const [openSearchBar, setOpenSearchBar] = React.useState(false);
  const [focused, setFocused] = React.useState(false);

  return (
    <>
      {openSearchBar ? (
        // If user clicks on search icon ... show input
        <div className="flex sm:hidden items-center p-3 h-full gap-2">
          <ArrowBackIcon onClick={() => setOpenSearchBar(false)} />
          {/* Input Div */}
          <NavBarSearchInput focusOnRender={true} focused={focused} setFocused={setFocused} />
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

          {/* Right Side */}
          <MobileRightSection setOpenSearchBar={setOpenSearchBar} />
        </div>
      )}
    </>
  );
};

export default MobileNavBar;
