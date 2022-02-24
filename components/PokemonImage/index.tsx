
// import { useEffect, useCallback, useRef, useState } from 'react'
import { Card, Header, Category } from './styles'

export default function PokemonImage ({ pokemon }: any) {
  return (
    <>
      <Header>
        <span>#{String(pokemon.id).padStart(3, '0')}</span>
        <p>{pokemon.name}</p>
      </Header>
      <Card>
        <img src={pokemon.sprites?.front_default || '/'} alt="" />
      </Card>
      <Category>
        { pokemon.types[0]?.type.name && <span>{ pokemon.types[0].type.name }</span>}
        { pokemon.types[1]?.type.name && <span>{ pokemon.types[1].type.name }</span>}
      </Category>
    </>

  )
}
