import React from 'react'

const steps = [
    {
        step: 1,
        title: 'Find a video',
        description: 'Browse from the collection of revision method videos and written summaries for helping you revise.'
    },
    {
        step: 2,
        title: 'Book a lesson',
        description: 'Book and individual tutor lesson for high quality 1-to-1 tutoring.'
    },
]

const HowItWorks = () => {
  return (
    <div className='flex flex-col items-center'>
        <h2 className='text-6xl py-6'>How We Work:</h2>
        <div className='flex justify-center items-center gap-2'>
            {steps.map(({step, title, description}) => (
                <div className='h-[40vh] w-1/3 border border-primary-color rounded-lg p-4 flex flex-col gap-2' key={step}>
                    <div className='h-10 w-10 bg-primary-color flex justify-center items-center rounded-lg mb-2'>
                        <div className='text-2xl font-bold'>{step}</div>
                    </div>
                    <h3 className='text-3xl font-semibold'>{title}</h3>
                    <p className='text-lg'>{description}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default HowItWorks