
import { useEffect, useCallback, useRef, useState } from 'react'
import { List } from './styles'
import PokemonItem from 'components/PokemonItem'
import PokemonService from 'services/pokemon.service'

export default function PokemonList ({ pokemons }: any) {
  const loader = useRef(null)
  // const [allPokemons, setAllPokemons] = useState(pokemons)
  const [nextPageUrl, setNextPageUrl] = useState(null)
  console.log('PokemonList init')
  // console.log('nextPageUrl', nextPageUrl)

  const handleObserver = useCallback((entries) => {
    const target = entries[0]
    if (target.isIntersecting) {
      PokemonService.getPokemons({ url: nextPageUrl }).then(({ pokemons, nextPage }: any) => {
        console.log('nextPageUrl', nextPageUrl)
        console.log('nextPage', nextPage)
        setNextPageUrl(nextPage)

        console.log('nextPageUrl', nextPageUrl)
        // setTimeout(() => {
        //   setAllPokemons([...allPokemons, ...pokemons])
        // })
        // setAllPokemons([...allPokemons, ...pokemons])
      })
    }
  }, [])

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: '20px',
      threshold: 0
    }
    const observer = new IntersectionObserver(handleObserver, option)
    if (loader.current) observer.observe(loader.current)
  }, [handleObserver, nextPageUrl])

  return (
    <>
      <List>
        {allPokemons.map((pokemon: any, index: number) => <PokemonItem key={index} pokemon={pokemon} />)}
      </List>
      <div ref={loader} />
    </>
  )
}
