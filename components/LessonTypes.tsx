import React from 'react'

const lessonTypes = [
    {
        id: 1,
        title: 'Lesson Type 1',
        desc: 'Lesson Type 1 Description and Category',
        price: '15.50+'
    },
    {
        id: 2,
        title: 'Lesson Type 2',
        desc: 'Lesson Type 2 Description and Category',
        price: '18.50+'
    },
    {
        id: 3,
        title: 'Lesson Type 3',
        desc: 'Lesson Type 3 Description and Category',
        price: '12.50+'
    },
]

const LessonTypes = () => {
  return (
    <div className='p-4 border-2 border-primary-color rounded-md shadow-xl bg-white flex flex-col gap-6'>
        {lessonTypes.map(({id, title, desc, price}) => (
            <div className='flex justify-between items-center' key={id}>
                <div>
                    <h2 className='font-semibold'>{title}</h2>
                    <h3>{desc}</h3>
                </div>
                <div className='py-[5px] px-[10px] bg-orange-100 text-primary-color rounded-full font-semibold'>
                    GBP {price}
                </div>
            </div>
        ))}
    </div>
  )
}

export default LessonTypes