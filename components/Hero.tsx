import React from 'react'
import bg from '../public/mr-bates-bg.png'

const Hero = () => {
  return (
    <div className='h-[60vh] bg-primary-color flex justify-center items-center'>
        <img src={bg.src} alt='background' className='w-3/4' />
    </div>
  )
}

export default Hero