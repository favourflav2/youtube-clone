'use client'
import { useGetMovies } from '@/app/hooks/useGetMovies'
import React from 'react'
import YoutubeCard from '../Cards/YoutubeCard'

const Movies = () => {
    const {data, error, isLoading} = useGetMovies({typeOfMovies:"Top Rated",page:'1'})

    console.log(data)
    

  return (
    <div className='grid xl:grid-cols-4 lg:grid-cols-3 superSmall:grid-cols-2  grid-cols-1 gap-x-4 gap-y-8 p-6'>
        {
            isLoading ? 
            (
                <div>Loading</div>
            ) 
            : 
            (
                data?.results.map((item)=>(
                    <YoutubeCard item={item} key={item.id}/>
                ))
            )
        }
    </div>
  )
}

export default Movies