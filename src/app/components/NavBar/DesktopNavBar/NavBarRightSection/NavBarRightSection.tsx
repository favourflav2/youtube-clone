"use client";
import React from "react";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import useCloseOnOutsideClick from "@/app/hooks/closeOnOutsideClick/useCloseOnOutsideClick";
import ProfilePicMenu from "../../ProfilePicMenu/ProfilePicMenu";


const NavBarRightSection = () => {
  // Handle Outside Click
  const menuRef = React.useRef<HTMLDivElement>(null);
  
  const { openOrClose,setOpenUseRefStateSetter,openUseRefStateSetter } = useCloseOnOutsideClick({ ref: menuRef});
  
  // I can only read and write from useRef current from event handlers or effects instead.
  //* Since useRef persists my state ... when I change my useRef I just set my state to the persisted useRef
  const setOpen = () => {
    openOrClose.current = true
    setOpenUseRefStateSetter(openOrClose.current)
  }

  

  return (
    <div className="flex items-center  relative gap-4">
      <VideoCallIcon />
      <NotificationsIcon />
      <AccountCircleIcon className="text-[30px]"  onClick={setOpen}/>

      <ProfilePicMenu open={openUseRefStateSetter} menuRef={menuRef} type="Desktop" />
    </div>
  );
};

export default NavBarRightSection;
