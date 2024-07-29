import { Skeleton } from '@mui/material'
import React from 'react'

const LoadingCard = () => {
    const emptyArray = Array(10).fill(0)
  return (
    <>
      {emptyArray.map((item, index) => (
        <div key={index} className=" h-auto">
          <Skeleton variant="rectangular" className="w-full xl:h-[19.75rem] lg:h-[16.625rem] 2xl:h-[22.875rem] min-[440px]:h-[18.813rem] h-[18.75rem] dark:bg-gray-500/10"  />
        </div>
      ))}
    </>
  )
}

export default LoadingCard