"use client";
import React from "react";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import useCloseOnOutsideClick from "@/app/hooks/closeOnOutsideClick/useCloseOnOutsideClick";
import ProfilePicMenu from "../../ProfilePicMenu/ProfilePicMenu";
import { assertIsNode } from "@/utils/assertTargetIsNode/assertTargetIsNode";
import { useApplicationStore } from "@/app/store";

type Props = {
  setOpenSearchBar: React.Dispatch<React.SetStateAction<boolean>>;
};

const MobileRightSection = ({ setOpenSearchBar }: Props) => {
  // Handle Outside Click
  const menuRef = React.useRef<HTMLDivElement>(null);
  const { openOrClose,setOpenUseRefStateSetter,openUseRefStateSetter } = useCloseOnOutsideClick({ ref: menuRef});
  
  // I can only read and write from useRef current from event handlers or effects instead.
  //* Since useRef persists my state ... when I change my useRef I just set my state to the persisted useRef
  const setOpen = () => {
    openOrClose.current = true
    setOpenUseRefStateSetter(openOrClose.current)
  }

  const setClose = () => {
    openOrClose.current = false
    setOpenUseRefStateSetter(openOrClose.current)
  }

  return (
    <div className="flex items-center gap-4">
      <SearchIcon onClick={() => setOpenSearchBar(true)} />
      <MicIcon className="min-[430px]:inline-block hidden" />
      <VideoCallIcon />
      <NotificationsIcon className="min-[430px]:inline-block hidden" />
      <AccountCircleIcon className="text-[30px]" onClick={setOpen} />

      <ProfilePicMenu open={openUseRefStateSetter} menuRef={menuRef} type="Mobile" setClose={setClose}/>
    </div>
  );
};

export default MobileRightSection;
