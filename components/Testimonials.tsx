import React from 'react'

const Testimonials = () => {
  return (
    <div className='grid grid-cols-3 gap-10 mx-auto py-20 w-3/4'>
        <div className='border border-primary-color rounded-md px-4 py-10'>
            <p className='text-2xl mb-3'>“A terrific piece of praise”</p>
            <p>Barry Moore -</p>
        </div>
        <div className='border border-primary-color rounded-md px-4 py-10'>
            <p className='text-2xl mb-3'>“A fantastic bit of feedback”</p>
            <p>Barry Moore -</p>
        </div>
        <div className='border border-primary-color rounded-md px-4 py-10'>
            <p className='text-2xl mb-3'>“A genuinely glowing review”</p>
            <p>Barry Moore -</p>
        </div>
    </div>
  )
}

export default Testimonials