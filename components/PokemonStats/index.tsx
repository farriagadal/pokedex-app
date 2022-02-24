
// import { useEffect, useCallback, useRef, useState } from 'react'
import { Card, Item, List } from './styles'

export default function PokemonStats ({ pokemon }: any) {
  return (
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
      height: { pokemon.height } ft
    </Card>
  )
}
