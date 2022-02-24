import type { NextPage } from 'next'
// import Head from 'next/head'
import PokemonList from 'components/PokemonList'
import InputText from 'components/InputText'
import PokemonService from 'services/pokemon.service'

// type HomeProps = {
//   pokemons: Array<Object>
// }

const Home: NextPage = ({ pokemons }: any) => {
  console.log('final road', pokemons)

  return (
    <div>
      <InputText placeholder="Buscar Pokémon" />
      <PokemonList pokemons={pokemons} />
    </div>
  )
}

Home.getInitialProps = async () => {
  const { pokemons }: any = await PokemonService.getPokemons({})
  return { pokemons }
}

export default Home
