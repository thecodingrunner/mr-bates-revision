import React from 'react'

const Testimonials = () => {
  return (
    <div className='grid grid-cols-3 gap-10 mx-auto py-20 w-3/4'>
        <div className='border border-primary-color rounded-md p-4'>
            <p className='text-2xl'>“A terrific piece of praise”</p>
            <p>Barry Moore -</p>
        </div>
        <div className='border border-primary-color rounded-md p-4'>
            <p className='text-2xl'>“A fantastic bit of feedback”</p>
            <p>Barry Moore -</p>
        </div>
        <div className='border border-primary-color rounded-md p-4'>
            <p className='text-2xl'>“A genuinely glowing review”</p>
            <p>Barry Moore -</p>
        </div>
    </div>
  )
}

export default Testimonials