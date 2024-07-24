"use client";
import { assertIsNode } from "@/utils/assertTargetIsNode/assertTargetIsNode";
import React from "react";
import { twMerge } from "tailwind-merge";
import SearchIcon from "@mui/icons-material/Search";

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

  const fav = true;

  return (
    <div className="flex items-center justify-center grow lg:max-w-[500px] h-[3rem] lg:mx-0 mx-5  p-1">
        {/* Content */}
      <div className="flex items-center h-full w-full bg-neutral-900 border-[1px] border-neutral-700 rounded-full">

        {/* Left Search Bar */}
        <div className={twMerge("rounded-l-full bg-inherit  h-full flex justify-center items-center w-[3rem]", !showSearchOnInput && "hidden")}>
          <button>
            <SearchIcon />
          </button>
        </div>

        {/* Input */}
        <input type="text" className={twMerge("bg-inherit h-full w-full outline-none", !showSearchOnInput && "rounded-l-full indent-4 ")} placeholder="Search" ref={inputRef} />

        {/* Right Search Bar */}
        <div className=" rounded-r-full h-full flex justify-center items-center w-[4rem] bg-[#343434c3] border-l border-neutral-600">
          <button>
            <SearchIcon />
          </button>
        </div>


      </div>
    </div>
  );
};

export default NavbarMiddleSection;

// const handleClick = () => {
//     if(inputRef.current === document.activeElement){
//         //setShowSearchOnInput(true)
//         inputRef.current?.classList.add('focus:bg-green-500')
//     }
// }
