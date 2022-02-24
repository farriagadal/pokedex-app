
// import { useEffect, useCallback, useRef, useState } from 'react'
import { Wrapper, Card, Item, List, ImageContainer } from './styles'
import Image from 'next/image'

export default function PokemonStats ({ pokemon }: any) {
  return (
    <Wrapper>
      <Card>
        <List>
          <Item>
            <label>Altura</label>
            <p>{ pokemon.height }  ft</p>
          </Item>
          <Item>
            <label>Categoría</label>
            <p>{ pokemon.types[0].type.name }</p>
          </Item>
          <Item>
            <label>Ataque base</label>
            <p>{ pokemon.stats[1].base_stat }</p>
          </Item>
          <Item>
            <label>Peso</label>
            <p>{ pokemon.weight } kg</p>
          </Item>
          <Item>
            <label>Vida base</label>
            <p>{ pokemon.stats[0].base_stat } HP</p>
          </Item>
        </List>
        <List>
          <Item>
            <label>Habilidades</label>
            <p>{ pokemon.moves[0].move.name }</p>
          </Item>
        </List>
        <ImageContainer>
          <Image src="/images/ash.png" alt="" width={233} height={151} />
        </ImageContainer>
      </Card>
    </Wrapper>
  )
}
