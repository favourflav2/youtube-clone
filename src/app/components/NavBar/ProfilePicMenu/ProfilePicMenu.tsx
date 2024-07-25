import React from 'react'
import ProfilePicMenuCard from "@/app/components/Cards/ProfilePicMenuCard";
import { helpAndFeedback,accountArray, dataInYoutubeArray, studioAndMembershipArray, settings } from '@/utils/ProfilePicMenu/profilePicMenu';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { twMerge } from 'tailwind-merge';



type Props = {
    open:boolean;
    menuRef: React.RefObject<HTMLDivElement>;
    type: 'Mobile' | "Desktop"
}

const ProfilePicMenu = ({open,menuRef, type}:Props) => {
  return (
    <>
    {open && (
        <div className={twMerge("absolute  dark:bg-darkGray dark:shadow-none shadow-[0px_0px_42px_0px_#00000024] bg-lightHomeBg max-h-[calc(100vh_-_3.75rem)]  py-4  right-0 z-10 rounded-xl text-[0.875rem] overflow-y-auto", type === "Desktop" ? 'top-[2.4rem] w-[20rem]' : 'top-[3rem] w-[16rem]' )} ref={menuRef}>
          {/* Content */}
          <div className="flex flex-col h-full">
            {/* User Icon First Box */}
            <div className="flex gap-3 px-4">
              <AccountCircleIcon className="ml-2 text-[38px]" />
              <div className="flex flex-col">
                <h2>Username1234</h2>
                <h2>@Username1234_</h2>

                <p className=" cursor-pointer text-blue-500 mt-2">View Your channel</p>
              </div>
            </div>

            {/* Horizontal Line */}
            <hr className="border-t-[1px] border-gray-300 dark:border-gray-300/40 my-3"/>

            {/* Account Section */}
            <div className="flex flex-col">
                {accountArray.map((item)=>(
                    <ProfilePicMenuCard item={item} key={item.text}/>
                ))}
            </div>

            {/* Horizontal Line */}
            <hr className="border-t-[1px] border-gray-300 dark:border-gray-300/40 my-3"/>

            {/* Studio & Memebership */}
            <div className="flex flex-col">
                {studioAndMembershipArray.map((item)=>(
                    <ProfilePicMenuCard item={item} key={item.text}/>
                ))}
            </div>

            {/* Data in youtube */}
            <div className="flex flex-col">
                {dataInYoutubeArray.map((item)=>(
                    <ProfilePicMenuCard item={item} key={item.text}/>
                ))}
            </div>

               {/* Horizontal Line */}
               <hr className="border-t-[1px] border-gray-300 dark:border-gray-300/40 my-3"/>

                {/* Settings */}
            <div className="flex flex-col">
                {settings.map((item)=>(
                    <ProfilePicMenuCard item={item} key={item.text}/>
                ))}
            </div>

            {/* Horizontal Line */}
            <hr className="border-t-[1px] border-gray-300 dark:border-gray-300/40 my-3"/>

             {/* Help and feedback */}
             <div className="flex flex-col">
                {helpAndFeedback.map((item)=>(
                    <ProfilePicMenuCard item={item} key={item.text}/>
                ))}
            </div>


          </div>
        </div>
      )}
    </>
  )
}

export default ProfilePicMenu