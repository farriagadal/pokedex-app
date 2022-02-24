
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
            <p>1,7 m</p>
          </Item>
          <Item>
            <label>Categoría</label>
            <p>1,7 m</p>
          </Item>
          <Item>
            <label>Debilidad</label>
            <p>1,7 m</p>
          </Item>
          <Item>
            <label>Peso</label>
            <p>1,7 m</p>
          </Item>
          <Item>
            <label>Sexo</label>
            <p>1,7 m</p>
          </Item>
        </List>
        <List>
          <Item>
            <label>Habilidades</label>
            <p>Mar Llamas</p>
          </Item>
        </List>
        <ImageContainer>
          <Image src="/images/ash.png" alt="" width={233} height={151} />
        </ImageContainer>
      </Card>
    </Wrapper>
  )
}
