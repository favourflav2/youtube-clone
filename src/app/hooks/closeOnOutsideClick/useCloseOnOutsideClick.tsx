"use client";
import React from "react";
import { assertIsNode } from "../../../utils/assertTargetIsNode/assertTargetIsNode";

type Props = {
  ref:React.RefObject<HTMLDivElement | HTMLInputElement>
}

const useCloseOnOutsideClick = ({ref}:Props) => {
  const [open, setOpen] = React.useState(false);

  const openMenu = () => setOpen(true);
  const closeMenu = () => setOpen(false);
  const handleClick = (e: MouseEvent) => {
    assertIsNode(e.target);
    if (ref.current && ref.current.contains(e.target)) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("click", handleClick, true);
    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  });

 return {
  open,
  setOpen,
  openMenu,
  closeMenu
 }
};

export default useCloseOnOutsideClick;
