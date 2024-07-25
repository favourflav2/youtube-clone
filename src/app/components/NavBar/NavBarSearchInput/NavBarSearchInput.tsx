import React from "react";
import { twMerge } from "tailwind-merge";
import SearchIcon from "@mui/icons-material/Search";
import useCloseOnOutsideClick from "@/app/hooks/closeOnOutsideClick/useCloseOnOutsideClick";

type Props = {
  focusOnRender: boolean;
  focused?: boolean;
  setFocused?: React.Dispatch<React.SetStateAction<boolean>>;
};

const NavBarSearchInput = ({ focusOnRender, focused, setFocused }: Props) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const {open:showSearchIconInsideInput} = useCloseOnOutsideClick({ref:inputRef})

  // On mobile devices, on render the input will be focused ... which will set the state to true
  // if the focus state || focus on render is true ... it will break the && operator and show the search bar in input

  // focused & setFocued are possibly undefined ... these check for that
  const onFocusFunc = () => {
    if (!setFocused) return;
    setFocused(true);
  };

  const onBlurFunc = () => {
    if (!setFocused) return;
    setFocused(false);
  };

  const isFocused = focused || false;

  return (
    <div
      className={twMerge(
        "w-full h-full flex items-center rounded-full  border-[1px]  dark:bg-neutral-900 bg-white group",
        !showSearchIconInsideInput && !isFocused ? "border-gray-300 dark:border-neutral-700" : "border-blue-500"
      )}
    >
      {/* Left Search Bar */}
      <div
        className={twMerge(
          "rounded-l-full bg-inherit  h-full flex justify-center items-center w-[3rem]",
          !showSearchIconInsideInput && !isFocused && "hidden"
        )}
      >
        <button>
          <SearchIcon />
        </button>
      </div>

      {/* Input */}
      <input
        type="text"
        className={twMerge("bg-inherit h-full w-full outline-none", !showSearchIconInsideInput && !isFocused && "rounded-l-full indent-4 ")}
        placeholder="Search"
        autoFocus={focusOnRender}
        ref={inputRef}
        onFocus={onFocusFunc}
        onBlur={onBlurFunc}
      />

      {/* Right Search Bar */}
      <div className=" rounded-r-full h-full flex justify-center items-center w-[4rem] dark:bg-darkGray border-l dark:border-neutral-600  bg-gray-100">
        <button>
          <SearchIcon />
        </button>
      </div>
    </div>
  );
};

export default NavBarSearchInput;
