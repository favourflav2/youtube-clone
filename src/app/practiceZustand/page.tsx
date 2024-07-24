'use client'
import React from 'react'
import { useCounterStore } from '../store'
import useGetFromStore from '../hooks/zustandHooks/useGetFromStore'

const PracticeZustand = () => {
    const {count, increment, decrement} = useCounterStore(state => state)

    const newCount = useGetFromStore(useCounterStore,(state:any) => state.count)

    console.log(count)
    
  return (
    <div className='min-h-screen pt-[3.75rem] bg-gray-400'>
        <h1>Count:{count}</h1>
        <button className='bg-red-500 rounded-full p-2' onClick={()=>increment()}>Add</button>
        <button className='bg-red-500 rounded-full p-2' onClick={()=>decrement()}>Del</button>
    </div>
  )
}

export default PracticeZustand