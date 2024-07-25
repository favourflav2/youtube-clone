import React from "react";
import DesktopNavBar from "./DesktopNavBar/DesktopNavBar";
import MobileNavBar from "./MobileNavBar/MobileNavBar";


const NavBar = () => {
  return (
    <div className="h-[3.75rem] fixed top-0 left-0  w-full z-10 dark:bg-darkHomeBg bg-lightHomeBg  dark:text-darkText text-lightText">
      {/* Desktop Content */}
     <DesktopNavBar />

     {/* Mobile Desktop */}
     <MobileNavBar />
    </div>
  );
};

export default NavBar;
