import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header>
        <nav className='flex justify-between items-center h-[15vh] px-10 bg-primary-color text-white'>
            <Link href={'/'} className='text-5xl font-semibold uppercase'>Mr Bates Revision</Link>
            <div className='flex gap-8 items-center'>
                <Link href={'/videos'} className='text-3xl'>Videos</Link>
                <Link href={'/lessons'} className='text-3xl'>Lessons</Link>
            </div>
        </nav>
    </header>
  )
}

export default Header