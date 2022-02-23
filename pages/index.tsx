import type { NextPage } from 'next'
// import Head from 'next/head'
import PokemonList from 'components/PokemonList'
import InputText from 'components/InputText'

const Home: NextPage = () => {
  return (
    <div>
      <InputText />
      <PokemonList />
    </div>
  )
}

export default Home
