
import { List } from './styles'
import PokemonItem from 'components/PokemonItem'

export default function PokemonList ({ pokemons }: any) {
  return (
    <>
      <List>
        {pokemons.map((pokemon: any, index: number) => <PokemonItem key={index} pokemon={pokemon} />)}
      </List>
    </>
  )
}
