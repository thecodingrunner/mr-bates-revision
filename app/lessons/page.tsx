import About from '@/components/About'
import BookFloat from '@/components/BookFloat'
import LessonTypes from '@/components/LessonTypes'
import TeachingStats from '@/components/TeachingStats'
import React from 'react'

const page = () => {
  return (
    <div className=''>
        <div className='pl-10 pt-10 w-[62vw] flex flex-col gap-10'>
            <About />
            <TeachingStats />
            <LessonTypes />
        </div>
        <BookFloat />
    </div>
  )
}

export default page