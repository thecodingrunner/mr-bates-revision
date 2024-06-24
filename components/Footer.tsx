import Link from 'next/link';
import React from 'react'
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
        <div className='h-[1px] w-[90vw] bg-gray-400 mx-auto mt-10' />
        <div className='flex flex-col justify-center items-center py-6 gap-3'>
            <h2 className='text-primary-color text-4xl'>Mr Bates Revision</h2>
            <div className='flex gap-6 items-center justify-center text-2xl font-semibold'>
                <Link href={'/'}>Home</Link>
                <Link href={'/videos'}>Videos</Link>
                <Link href={'/lessons'}>Lessons</Link>
            </div>
            <a href='https://www.youtube.com/@MrBatesRevision' target='_blank' className='text-6xl text-gray-400'>
                <FaYoutube />
            </a>
        </div>
    </footer>
  )
}

export default Footer