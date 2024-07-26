"use client";
import React from "react";
import { assertIsNode } from "../../../utils/assertTargetIsNode/assertTargetIsNode";
import { useApplicationStore } from "@/app/store";

type Props = {
  ref: React.RefObject<HTMLDivElement | HTMLInputElement>;
};

const useCloseOnOutsideClick = ({ ref }: Props) => {
  // Zustand Persisted State
  const {setOpenProfilePicMenu, openProfilePicMenu} = useApplicationStore()

  //const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const handleClick = (e: MouseEvent | TouchEvent) => {
      assertIsNode(e.target);
      if (ref.current && !ref.current.contains(e.target)) {
        //console.log("You clicked outside");
        //setOpen(false);
       const fav =  ref.current.contains(e.target)
       console.log(ref.current)
       console.log(e.composedPath().includes(ref.current))
       // setOpenProfilePicMenu(false)
      }
    };
    document.addEventListener("click", handleClick, true);
    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, [ref,setOpenProfilePicMenu]);

  
};

export default useCloseOnOutsideClick;
