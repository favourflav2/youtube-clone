"use client";
import React from "react";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import useCloseOnOutsideClick from "@/app/hooks/closeOnOutsideClick/useCloseOnOutsideClick";
import ProfilePicMenu from "../../ProfilePicMenu/ProfilePicMenu";

type Props = {
  setOpenSearchBar: React.Dispatch<React.SetStateAction<boolean>>;
};

const MobileRightSection = ({ setOpenSearchBar }: Props) => {
  // Handle Outside Click
  const menuRef = React.useRef<HTMLDivElement>(null);
  const { open, setOpen } = useCloseOnOutsideClick({ ref: menuRef });

  return (
    <div className="flex items-center gap-4">
      <SearchIcon onClick={() => setOpenSearchBar(true)} />
      <MicIcon className="min-[430px]:inline-block hidden" />
      <VideoCallIcon />
      <NotificationsIcon className="min-[430px]:inline-block hidden" />
      <AccountCircleIcon className="text-[30px]" onClick={() => setOpen(true)} />

      <ProfilePicMenu open={open} menuRef={menuRef} type="Mobile"/>
    </div>
  );
};

export default MobileRightSection;
