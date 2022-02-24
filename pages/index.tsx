
import { useEffect, useCallback, useRef, useState } from 'react'
import type { NextPage } from 'next'
// import Head from 'next/head'
import PokemonList from 'components/PokemonList'
import InputText from 'components/InputText'
import PokemonService from 'services/pokemon.service'

// type HomeProps = {
//   pokemons: Array<Object>
// }

const Home: NextPage = ({ pokemons, nextPage }: any) => {
  const loader = useRef(null)
  let allPokemons = pokemons
  let nextPageUrl = nextPage
  const [pokemonsTemp, setPokemonsTemp] = useState<any>(pokemons)

  const handleObserver = useCallback((entries) => {
    console.log('entries', entries)

    const target = entries[0]
    if (target.isIntersecting) {
      PokemonService.getPokemons({ url: nextPageUrl }).then(({ pokemons, nextPage }: any) => {
        nextPageUrl = nextPage
        allPokemons = [...allPokemons, ...pokemons]
        setPokemonsTemp(allPokemons)
      })
    }
  }, [])

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: '0px',
      threshold: 0
    }
    const observer = new IntersectionObserver(handleObserver, option)
    if (loader.current) observer.observe(loader.current)
  }, [handleObserver])

  return (
    <div>
      <InputText placeholder="Buscar Pokémon" />
      <PokemonList pokemons={pokemonsTemp} />
      <div ref={loader} />
    </div>
  )
}

Home.getInitialProps = async () => {
  const { pokemons, nextPage }: any = await PokemonService.getPokemons({})
  return { pokemons, nextPage }
}

export default Home
