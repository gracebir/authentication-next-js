'use client'
import React from 'react'
import Link from 'next/link'
import SiginButton from './SiginButton'

const Header = () => {
    return (
        <header className="bg-gray-900 py-5 text-white">
            <nav className='flex justify-between max-w-7xl mx-auto'>
                <div className='flex gap-4'>
                    <Link className='text-lg' href="/">Home</Link>
                    <Link className='text-lg' href="/about">about</Link>
                </div>
                <div className='flex gap-4'>
                    <SiginButton/>
                </div>
            </nav>
        </header>
    )
}

export default Header
