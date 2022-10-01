import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HeroCard = ({ hero }) => {
  return (
    <Link href={`hero/${hero.id}`}>
      <article className='w-44 h-60 rounded-lg overflow-hidden flex items-center justify-center relative shadow-card hover:scale-105 transform transition cursor-pointer'>
        <Image layout='fill' src={hero.images.sm} alt={hero.name} />
        <span className='absolute bottom-0 text-white justify-left w-full p-5 darken-bottom'>
          <h1 className='font-bold'>{hero.name}</h1>
          <p className='text-sm'>Height: {hero.appearance.height[1]}</p>
          <p className='text-sm'>Weight: {hero.appearance.weight[1]}</p>
        </span>
      </article>
    </Link>
  )
}

export default HeroCard
