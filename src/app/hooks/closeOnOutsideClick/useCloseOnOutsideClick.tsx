"use client";
import React from "react";
import { assertIsNode } from "../../../utils/assertTargetIsNode/assertTargetIsNode";
import { useApplicationStore } from "@/app/store";

type Props = {
  ref:React.RefObject<HTMLDivElement | HTMLInputElement>
}

const useCloseOnOutsideClick = ({ref}:Props) => {
  // Zustand Persisted State
  const {openProfilePicMenu, setOpenProfilePicMenu} = useApplicationStore()

  const openMenu = () => setOpenProfilePicMenu(true);
  const closeMenu = () => setOpenProfilePicMenu(false);
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
  open:openProfilePicMenu,
  setOpen:setOpenProfilePicMenu,
  openMenu,
  closeMenu
 }
};

export default useCloseOnOutsideClick;
