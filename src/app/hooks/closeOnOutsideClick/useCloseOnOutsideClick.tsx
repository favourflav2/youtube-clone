"use client";
import React from "react";
import { assertIsNode } from "../../../utils/assertTargetIsNode/assertTargetIsNode";
import { useApplicationStore } from "@/app/store";

type Props = {
  ref:React.RefObject<HTMLDivElement | HTMLInputElement>
}

const useCloseOnOutsideClick = ({ref}:Props) => {
  // Zustand Persisted State
  const {setOpenProfilePicMenu, openProfilePicMenu} = useApplicationStore()

  const handleClick = (e: MouseEvent) => {
    assertIsNode(e.target);
    if (ref.current && ref.current.contains(e.target)) {
      setOpenProfilePicMenu(true);
    } else {
      setOpenProfilePicMenu(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("click", handleClick, true);
    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  });

return {
  setOpen:setOpenProfilePicMenu,
  open:openProfilePicMenu
}
};

export default useCloseOnOutsideClick;
