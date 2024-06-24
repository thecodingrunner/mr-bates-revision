import React from 'react'
import thumb from '../public/mr-bates-thumb-1.png'

const BookFloat = () => {
  return (
    <div className='absolute h-20 top-[20vh] right-10'>
        <div className='sticky top-10 right-10 w-[30vw] shadow-xl bg-white border-2 border-primary-color rounded-md'>
            <img src={thumb.src} />
            <div className='p-3 flex flex-col gap-2'>
                <div className='flex justify-between items-start py-4'>
                    <h2 className='text-2xl font-semibold'>Lessons</h2>
                    <div className='flex flex-col gap-[2px] text-right'>
                        <h3 className='text-gray-500'>Hourly rate from</h3>
                        <h3 className='text-3xl font-semibold'>GBP 15</h3>
                    </div>
                </div>
                <button className='bg-primary-color text-white p-2 text-2xl rounded-md'>Book lesson</button>
                <button className='border-2 rounded-md p-2 text-2xl'>Get in touch</button>
            </div>
        </div>
    </div>
  )
}

export default BookFloat