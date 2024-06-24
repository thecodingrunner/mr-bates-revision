"use client"
import React, { useState } from 'react'
import profile from '../public/mr-bates-profile.jpg'

const About = () => {
    const [section, setSection] = useState('About')
  return (
    <div className='p-4 border-2 border-primary-color rounded-md bg-white shadow-xl'>
        <div className='flex gap-6 items-center'>
            <img src={profile.src} alt="profile" className='rounded-full w-36 h-36' />
            <div>
                <h2 className='text-4xl font-semibold'>Mr Bates</h2>
            </div>
        </div>
        <div className='flex gap-6 mt-6 w-auto ml-6'>
            <div className='flex flex-col items-center justify-center'>
                <button className={`text-2xl font-semibold ${section === 'About' ? '' : 'text-gray-500'}`} onClick={() => setSection('About')}>About Me</button>
                <div className={`h-2 bg-primary-color transition-all ease-in-out 800ms ${section === 'About' ? 'w-10' : 'w-0'}`} />
            </div>
            <div className='flex flex-col items-center justify-center'>
                <button className={`text-2xl font-semibold ${section === 'Teacher' ? '' : 'text-gray-500'}`} onClick={() => setSection('Teacher')}>Me as a Teacher</button>
                <div className={`h-2 bg-primary-color transition-all ease-in-out 800ms ${section === 'Teacher' ? 'w-10' : 'w-0'}`} />
            </div>
            <div className='flex flex-col items-center justify-center'>
                <button className={`text-2xl font-semibold ${section === 'Style' ? '' : 'text-gray-500'}`} onClick={() => setSection('Style')}>My lessons & teaching style</button>
                <div className={`h-2 bg-primary-color transition-all ease-in-out 800ms ${section === 'Style' ? 'w-10' : 'w-0'}`} />
            </div>
        </div>
        <div className='h-[2px] w-[90%] bg-gray-200 ml-6' />
        <article className='py-4 px-6'>
            {section === 'About' && (
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias, minima! Odio iure aperiam sint similique ipsam non eum quae esse sapiente ipsa, perferendis, est sit quasi a, incidunt animi! Dolores impedit ducimus velit atque et sequi voluptas, voluptate unde! Natus non fugiat, magnam porro rem necessitatibus a asperiores quo nesciunt, cupiditate, expedita deleniti qui amet eligendi ipsum molestiae error blanditiis!</p>
            )}
            {section === 'Teacher' && (
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ab aut, dolorum necessitatibus mollitia sed? Laudantium cum ab vel animi ex amet illum ad, similique quisquam reprehenderit, alias, cupiditate illo?</p>
            )}
            {section === 'Style' && (
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad deleniti sunt consectetur rerum molestiae impedit ducimus cumque corporis ipsum distinctio saepe quibusdam, atque laborum, reiciendis, sit dolore enim odit earum nobis consequuntur! Fugit, facere soluta? Sequi quis, perspiciatis ipsam quia tempora nostrum nam aut veniam optio quae, eos, cupiditate ad!</p>
            )}
        </article>
    </div>
  )
}

export default About