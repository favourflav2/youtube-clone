"use client";
import { assertIsNode } from "@/utils/assertTargetIsNode/assertTargetIsNode";
import React from "react";
import { twMerge } from "tailwind-merge";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import NavBarSearchInput from "../NavBarSearchInput/NavBarSearchInput";


const NavbarMiddleSection = () => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [showSearchOnInput, setShowSearchOnInput] = React.useState(false);

  const handleClick = (e: MouseEvent) => {
    assertIsNode(e.target);
    if (inputRef.current && inputRef.current.contains(e.target)) {
      setShowSearchOnInput(true);
    } else {
      setShowSearchOnInput(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("click", handleClick, true);
    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  });


  return (
    <div className="flex items-center justify-center grow lg:max-w-[600px] h-[3rem] lg:mx-0 mx-5  p-1">
      {/* Content */}
      <div className="flex items-center h-full w-full">

        {/* Input Div */}
        <NavBarSearchInput showSearchIconInsideInput={showSearchOnInput} inputRef={inputRef} focusOnRender={false}/>

        {/* Mic Icon */}
        <button className=" rounded-full bg-gray-300/30 dark:bg-[#343434c3] h-[40px] w-[45px] p-1 ml-[1rem]"><MicIcon className=""/></button>
      </div>
    </div>
  );
};

export default NavbarMiddleSection;

// <div className="w-full h-full flex items-center rounded-full border-gray-300 border-[1px] dark:border-neutral-700 dark:bg-neutral-900 bg-white ">
//           {/* Left Search Bar */}
//           <div className={twMerge("rounded-l-full bg-inherit  h-full flex justify-center items-center w-[3rem]", !showSearchOnInput && "hidden")}>
//             <button>
//               <SearchIcon />
//             </button>
//           </div>

//           {/* Input */}
//           <input
//             type="text"
//             className={twMerge("bg-inherit h-full w-full outline-none", !showSearchOnInput && "rounded-l-full indent-4 ")}
//             placeholder="Search"
//             ref={inputRef}
//           />

//           {/* Right Search Bar */}
//           <div className=" rounded-r-full h-full flex justify-center items-center w-[4rem] dark:bg-[#343434c3] border-l dark:border-neutral-600  bg-gray-100">
//             <button>
//               <SearchIcon />
//             </button>
//           </div>
//         </div>

