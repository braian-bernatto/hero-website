import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <Link href={'/'}>
      <a>
        <h1 className='w-full text-center font-bold text-4xl text-gray-900 fixed top-0 z-10 bg-white opacity-80 p-3'>
          Superhero Website
        </h1>
      </a>
    </Link>
  )
}

export default Header
