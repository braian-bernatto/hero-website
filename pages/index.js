import Head from 'next/head'
import { useEffect, useState } from 'react'
import HeroCard from '../components/HeroCard'
import clienteAxios from '../config/axios'

export default function Home() {
  const [heroes, setHeroes] = useState([])

  const getAllHeroes = async () => {
    try {
      const response = await clienteAxios.get('/all.json')
      setHeroes(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getAllHeroes()
  }, [])

  return (
    <>
      <Head>
        <title>Superhero Website</title>
        <meta
          name='description'
          content='cool website where you can find all kind of data about your favourite superhero'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='mt-20 h-full w-full flex justify-center items-center gap-4 flex-wrap'>
        {heroes.map(hero => (
          <HeroCard key={hero.id} hero={hero} />
        ))}
      </div>
    </>
  )
}
