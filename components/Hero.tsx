import React from 'react'
import bg from '../public/mr-bates-bg.png'

const Hero = () => {
  return (
    <div className='h-[60vh] bg-primary-color flex justify-center items-center flex-col gap-4'>
        {/* <img src={bg.src} alt='background' className='w-3/4' /> */}
        <h1 className='text-8xl'>mr bates revision</h1>
        <p className='text-center w-1/2 text-xl'>Whether you're grappling with challenging concepts or looking to refine your exam strategies, mr bates revision is your go-to resource for academic success. Join me, and let's make learning an enjoyable and rewarding experience!</p>
    </div>
  )
}

export default Hero