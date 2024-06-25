"use client"
import { videos } from '@/data/videos'
import React, { useState } from 'react'
import { video } from '@/types'
import Link from 'next/link'

const Videos = () => {
    const [cat, setCat] = useState('Booster')
  return (
    <div className='flex flex-col justify-center items-center'>
        <div className='flex gap-3 py-6'>
            <button className={`border border-primary-color py-1 px-2 font-semibold rounded-md ${cat === 'Prestudy' ? 'bg-primary-color text-white' : ''}`} onClick={() => setCat('Prestudy')}>PRESTUDY</button>
            <button className={`border border-primary-color py-1 px-2 font-semibold rounded-md ${cat === 'Booster' ? 'bg-primary-color text-white' : ''}`} onClick={() => setCat('Booster')}>BOOSTER ACTIVITIES</button>
            <button className={`border border-primary-color py-1 px-2 font-semibold rounded-md ${cat === 'Connecting' ? 'bg-primary-color text-white' : ''}`} onClick={() => setCat('Connecting')}>MAKING CONNECTIONS</button>
            <button className={`border border-primary-color py-1 px-2 font-semibold rounded-md ${cat === 'Level Up' ? 'bg-primary-color text-white' : ''}`} onClick={() => setCat('Level Up')}>LEVEL UPS</button>
            <button className={`border border-primary-color py-1 px-2 font-semibold rounded-md ${cat === 'Reusable Testable' ? 'bg-primary-color text-white' : ''}`} onClick={() => setCat('Reusable Testable')}>REUSABLE TESTABLE</button>
        </div>
        <div className='grid grid-cols-3 gap-10 w-[80vw] mx-auto'>
            {videos.filter(({category}) => category.includes(cat)).length > 0 ? (
            videos.filter(({category}) => category.includes(cat)).map(({id, title, category, description, thumbnail}: video) => (
                <Link href={`/${id}`} className='flex flex-col gap-2 items-start' key={id}>
                    <img src={thumbnail.src}/>
                    <h3 className='text-lg'>{title}</h3>
                    <h4 className='px-2 pt-1 border border-primary-color'>{category}</h4>
                    <p>{description}</p>
                </Link>
            ))
            ) : (
                <p>No Videos Available</p>
            )}
        </div>
    </div>
  )
}

export default Videos