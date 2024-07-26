"use client";
import React from "react";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import useCloseOnOutsideClick from "@/app/hooks/closeOnOutsideClick/useCloseOnOutsideClick";
import ProfilePicMenu from "../../ProfilePicMenu/ProfilePicMenu";
import { useApplicationStore } from "@/app/store";

const NavBarRightSection = () => {
  // Handle Outside Click
  const menuRef = React.useRef<HTMLDivElement>(null);
  const {setOpenProfilePicMenu:setOpen, openProfilePicMenu:open} = useApplicationStore(state => state)
  const fav = useCloseOnOutsideClick({ref:menuRef})
  // const { openProfilePicMenu:open, setOpenProfilePicMenu:setOpen } = useCloseOnOutsideClick({ ref: menuRef });

  //console.log(open)

  return (
    <div className="flex items-center  relative gap-4">
      <VideoCallIcon />
      <NotificationsIcon />
      <AccountCircleIcon className="text-[30px]" onClick={() => setOpen(true)} />

      <ProfilePicMenu open={open} menuRef={menuRef} type="Desktop" />
    </div>
  );
};

export default NavBarRightSection;
