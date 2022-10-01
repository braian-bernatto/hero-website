import Image from 'next/image'
import React, { useEffect } from 'react'
import clienteAxios from '../../config/axios'

const HeroPage = ({ hero }) => {
  useScript('/js/custom.js')
  console.log('entro en heropage')

  const stats = Object.entries(hero.powerstats)
  return (
    <div className='w-full h-full justify-center items-center flex p-10 flex-wrap gap-10'>
      <div className='rounded-lg overflow-hidden flex items-center justify-center relative shadow-card-light cursor-pointer'>
        <Image width={500} height={700} src={hero.images.lg} alt={hero.name} />
      </div>

      <div className='flex flex-wrap w-80 justify-center'>
        {stats.map(([titulo, value]) => (
          <span key={titulo}>
            <div className='single-chart' value={value}></div>
            <h2 className='text-color-dark font-weight-normal text-5 mb-2 text-center capitalize'>
              {titulo}
            </h2>
          </span>
        ))}
      </div>

      <div className='flex justify-center w-full flex-wrap items-center gap-3'>
        <h1 className='font-bold text-4xl w-full text-center text-gray-600'>
          {hero.name}
        </h1>
        <ul>
          {Object.entries(hero.appearance).map(([clave, valor]) => (
            <li key={clave} className='capitalize'>
              <span className='font-semibold'>{clave}</span>{' '}
              <span className='ml-3 bg-gray-500 text-white rounded-full px-3 shadow-md'>
                {Array.isArray(valor) ? valor[1] : valor}
              </span>
            </li>
          ))}
          {Object.entries(hero.biography).map(([clave, valor]) => (
            <li key={clave} className='capitalize'>
              <span className='font-semibold'>{clave}</span>{' '}
              <span className='ml-3 bg-gray-500 text-white rounded-full px-3 shadow-md'>
                {Array.isArray(valor) ? valor.join(' - ') : valor}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
const useScript = url => {
  useEffect(() => {
    const script = document.createElement('script')

    script.src = url
    script.async = true

    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])
}

export const getStaticProps = async ({ params }) => {
  const hero = await clienteAxios.get(`/id/${params.hero}.json`)
  return {
    props: {
      hero: hero.data
    }
  }
}

export const getStaticPaths = async () => {
  const heroes = await clienteAxios.get('/all.json')
  return {
    paths: heroes.data.map(hero => ({
      params: { hero: hero.id.toString() }
    })),
    fallback: false
  }
}

export default HeroPage
