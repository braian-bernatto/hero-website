import Head from 'next/head'
import React, { useEffect } from 'react'
import HeroDetails from '../../components/HeroDetails'
import clienteAxios from '../../config/axios'

const HeroPage = ({ hero }) => {
  useScript('/js/custom.js')
  const titulo = `Superhero | ${hero.name}`
  return (
    <>
      <Head>
        <title>{titulo}</title>
      </Head>
      <HeroDetails hero={hero} />
    </>
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
