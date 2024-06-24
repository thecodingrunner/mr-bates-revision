import React from 'react'

const teachingStats = [
    {
        id: 1,
        value: '5.0',
        desc: 'Rating',
    },
    {
        id: 2,
        value: '1,000',
        desc: 'Students',
    },
    {
        id: 3,
        value: '5,000',
        desc: 'Lessons',
    },
    {
        id: 4,
        value: '100%',
        desc: 'Attendance',
    },
    {
        id: 5,
        value: '100%',
        desc: 'Response',
    },
]

const TeachingStats = () => {
  return (
    <div className='p-4 border-2 border-primary-color rounded-md bg-white shadow-xl flex gap-12 justify-center items-center'>
        {teachingStats.map(({id, value, desc}) => (
            <div className='flex flex-col gap-1 justify-center items-center' key={id}>
                <h2 className='text-4xl font-semibold'>{value}</h2>
                <p>{desc}</p>
            </div>
        ))}
    </div>
  )
}

export default TeachingStats