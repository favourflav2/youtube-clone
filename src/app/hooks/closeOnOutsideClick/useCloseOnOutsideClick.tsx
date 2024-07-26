"use client";
import React from "react";
import { assertIsNode } from "../../../utils/assertTargetIsNode/assertTargetIsNode";
import { useApplicationStore } from "@/app/store";

type Props = {
  ref: React.RefObject<HTMLDivElement | HTMLInputElement>;
};

const useCloseOnOutsideClick = ({ ref}: Props) => {
  // Zustand Persisted State
  //const {setOpenProfilePicMenu, openProfilePicMenu} = useApplicationStore()

  const openOrClose = React.useRef<boolean>(false)
  const [openUseRefStateSetter, setOpenUseRefStateSetter] = React.useState(false)


  

  React.useEffect(() => {
    const handleClick = (e: MouseEvent | TouchEvent) => {
      assertIsNode(e.target);
      if (ref.current && !ref.current.contains(e.target)) {
        console.log("You clicked outside");
        openOrClose.current = false
        setOpenUseRefStateSetter(openOrClose.current)

        //setOpenProfilePicMenu(false)
      }
    };
    document.addEventListener("click", handleClick, true);
    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, [ref,setOpenUseRefStateSetter]);

  return {
    openOrClose,
    setOpenUseRefStateSetter,
    openUseRefStateSetter
   
  };
};

export default useCloseOnOutsideClick;
