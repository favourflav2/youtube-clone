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
  const { open, openMenu } = useCloseOnOutsideClick({ ref: menuRef });

  return (
    <div className="flex items-center  relative gap-4">
      <VideoCallIcon  />
      <NotificationsIcon  />
      <AccountCircleIcon className="text-[30px]" onClick={openMenu} />

      <ProfilePicMenu open={open} menuRef={menuRef} type='Desktop'/>
    </div>
  );
};

export default NavBarRightSection;
