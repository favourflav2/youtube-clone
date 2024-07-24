import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import YouTubeIcon from '@mui/icons-material/YouTube';

const NavBar = () => {
  return (
    <div className='h-[3.75rem] fixed top-0 left-0 bg-darkHomeBg text-darkText w-full z-10'>
      {/* Desktop Content */}
      <div className='flex justify-between items-center p-3 h-full'>

        {/* Left Side */}
        <div className='flex items-center '>
            <button className='mr-5'><MenuIcon className='text-[30px]'/></button>
           
           <div className='flex items-center'>
            <button className=' text-tubeRed mr-1'><YouTubeIcon className='text-[1.875rem]'/></button>
            <h1 className='text-[1.1875rem] font-semibold'>Youtube</h1>
           </div>

        </div>

         {/* Middle */}
        <div className='flex items-center h-[2.1875rem]  '>

            <div className='flex items-center h-full min-w-[25rem]'>
                <input type="text"  className=' rounded-l-full h-full w-full'/>
                <div className=' rounded-r-full bg-pink-200 h-full'>
hey
                </div>
            </div>

        </div>

        {/* Right Side */}
        <div className='flex items-center '>
Icons dont need as much space
        </div>


      </div>
    </div>
  )
}

export default NavBar
