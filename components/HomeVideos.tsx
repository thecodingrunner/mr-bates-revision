"use client"
import { videos } from '@/data/videos'
import React, { useState } from 'react'
import { video } from '@/types'
import Link from 'next/link'

const HomeVideos = () => {
    const [show, setShow] = useState(false)
    
  return (
    <div className='px-10 py-20'>
        <h2 className='text-primary-color font-semibold text-xl'>Revision Videos</h2>
        <h3 className='text-4xl my-3'>Find a video to start learning revision methods</h3>
        <div className='grid grid-cols-3 gap-20 py-4 px-10'>
            {videos.slice(0, show ? 9 : 3).map(({id, title, category, description, thumbnail}: video) => (
                <div className='flex flex-col gap-2 items-start' key={id}>
                    <img src={thumbnail.src}/>
                    <h3 className='text-lg'>{title}</h3>
                    <h4 className='px-2 pt-1 border border-primary-color'>{category}</h4>
                    <p>{description}</p>
                </div>
            ))}
        </div>
        <div className='flex gap-3 mt-6'>
            <button className='py-2 px-3 text-xl bg-primary-color text-white rounded-lg' onClick={() => setShow(prev => !prev)}>{show ? 'Show less' : 'Show 6 more'}</button>
            <Link href={'/videos'} className='py-2 px-3 text-xl border rounded-lg'>View all</Link>
        </div>
    </div>
  )
}

export default HomeVideos