"use client";
import React from "react";
import { assertIsNode } from "../../../utils/assertTargetIsNode/assertTargetIsNode";
import { useApplicationStore } from "@/app/store";

type Props = {
  ref: React.RefObject<HTMLDivElement | HTMLInputElement>;
};

const useCloseOnOutsideClick = ({ ref }: Props) => {
  // Zustand Persisted State
  //const {setOpenProfilePicMenu, openProfilePicMenu} = useApplicationStore()

  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const handleClick = (e: MouseEvent | TouchEvent) => {
      assertIsNode(e.target);
      if (ref.current && !ref.current.contains(e.target)) {
        console.log("You clicked outside");
        setOpen(false);
        //setOpenProfilePicMenu(false)
      }
    };
    document.addEventListener("click", handleClick, true);
    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, [setOpen, ref]);

  return {
    setOpen,
    open,
  };
};

export default useCloseOnOutsideClick;
