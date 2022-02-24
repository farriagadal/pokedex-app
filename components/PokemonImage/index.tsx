
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
        <span>Fuego</span>
        <span>Volador</span>
      </Category>
    </>

  )
}
