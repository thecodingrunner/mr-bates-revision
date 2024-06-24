import React from 'react'

const HomeStats = () => {
  return (
    <div className='flex justify-around py-10'>
        <div className='flex flex-col justify-center items-center gap-2'>
            <h3 className='text-7xl font-bold'>3300+</h3>
            <h4 className='text-xl'>Views on YouTube</h4> 
        </div>
        <div className='flex flex-col justify-center items-center gap-2'>
            <h3 className='text-7xl font-bold'>15+</h3>
            <h4 className='text-xl'>Years of teaching experience</h4> 
        </div>
        <div className='flex flex-col justify-center items-center gap-2'>
            <h3 className='text-7xl font-bold'>500+</h3>
            <h4 className='text-xl'>Students taught</h4> 
        </div>
    </div>
  )
}

export default HomeStats