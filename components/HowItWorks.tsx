import React from 'react'

const steps = [
    {
        step: 1,
        title: 'Find a video',
        description: 'Browse from the collection of revision technique videos'
    },
    {
        step: 2,
        title: 'Find a video',
        description: 'Browse from the collection of revision technique videos'
    },
    {
        step: 3,
        title: 'Find a video',
        description: 'Browse from the collection of revision technique videos'
    },
]

const HowItWorks = () => {
  return (
    <div className='flex flex-col items-center'>
        <h2 className='text-6xl py-6'>How We Work:</h2>
        <div className='flex justify-center items-center gap-2'>
            {steps.map(({step, title, description}) => (
                <div className='h-[40vh] w-[25vw] border border-primary-color rounded-lg p-4 flex flex-col gap-2' key={step}>
                    <div className='h-10 w-10 bg-primary-color flex justify-center items-center rounded-lg'>
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