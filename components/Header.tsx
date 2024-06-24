import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header>
        <nav className='flex justify-between items-center h-[15vh] px-10 bg-primary-color text-white'>
            <Link href={'/'} className='text-4xl font-semibold'>Mr Bates Revision</Link>
            <div className='flex gap-4'>
                <Link href={'/videos'} className='text-lg'>Videos</Link>
                <Link href={'/lessons'} className='text-lg'>Lessons</Link>
            </div>
        </nav>
    </header>
  )
}

export default Header