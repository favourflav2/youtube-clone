"use client";
import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useTheme } from "next-themes";

type Prop = {
  item: {
    text: string;
    hasArrow: boolean;
    icon: JSX.Element;
    icon2?: JSX.Element | undefined;
  };
};

const ProfilePicMenuCard = ({ item }: Prop) => {
  const { resolvedTheme } = useTheme();

  const textForLightAndDarkMode = item.icon2 ? `${item.text} ${resolvedTheme}` : item.text;
  const buttonIconForLightAndDarkMode = item.icon2 ? (resolvedTheme === "dark" ? item.icon2 : item.icon) : item.icon;
  return (
    <div key={item.text} className="px-4 py-2 flex justify-between w-full items-center cursor-pointer hover:dark:bg-gray-500/30 hover:bg-gray-200">
      {/* Left Side */}
      <div className="flex items-center gap-3">
        <button>{buttonIconForLightAndDarkMode}</button>
        <p>{textForLightAndDarkMode}</p>
      </div>

      {/* Right Side */}
      {item.hasArrow && (
        <button>
          <KeyboardArrowRightIcon />
        </button>
      )}
    </div>
  );
};

export default ProfilePicMenuCard;
