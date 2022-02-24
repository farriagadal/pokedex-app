
import type { NextPage } from 'next'
import InputText from 'components/InputText'
import PokemonService from 'services/pokemon.service'
import PokemonStats from 'components/PokemonStats'
import PokemonImage from 'components/PokemonImage'

const PokemonDetail: NextPage = ({ pokemon }: any) => {
  console.log('road to pokemon detail', pokemon)
  return (
    <div>
      <InputText placeholder="Buscar Pokémon" />
      <PokemonImage pokemon={pokemon} />
      <PokemonStats pokemon={pokemon} />
    </div>
  )
}

export async function getServerSideProps (context: any) {
  const name = context.params.name // Get ID from slug `/book/1`
  const { pokemon }: any = await PokemonService.getPokemonByName(name)
  return {
    props: { pokemon }// will be passed to the page component as props
  }
}

export default PokemonDetail
