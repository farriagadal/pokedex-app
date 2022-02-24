
import { Card, Header } from './styles'
// import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import PokemonService from 'services/pokemon.service'

export default function PokemonItem ({ pokemon }: any) {
  const [pokemonDetail, setPokemonDetail] = useState<any>({})

  useEffect(() => {
    PokemonService.getPokemonByUrl(pokemon.url).then(({ pokemon }: any) => {
      setPokemonDetail(pokemon)
    })
  }, [])

  return (
    <Link href={`/pokemon/${pokemon.name}`}>
      <Card>
        <img src={pokemonDetail.sprites?.front_default || '/'} alt="" />
        <Header>
          <span>#{String(pokemonDetail.id).padStart(3, '0')}</span>
          <p>{pokemon.name}</p>
        </Header>
      </Card>
    </Link>
  )
}
