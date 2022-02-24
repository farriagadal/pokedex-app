
import type { NextPage } from 'next'
import InputText from 'components/InputText'
import PokemonService from 'services/pokemon.service'
import PokemonStats from 'components/PokemonStats'
import PokemonImage from 'components/PokemonImage'
import Message from 'components/Message'

const PokemonDetail: NextPage = ({ pokemon }: any) => {
  console.log('road to pokemon detail', pokemon)
  return (
    <div>
      <InputText placeholder="Buscar Pokémon" />
      { pokemon.id
        ? (
        <>
          <PokemonImage pokemon={pokemon} />
          <PokemonStats pokemon={pokemon} />
        </>
          )
        : <Message>Pokemon no encontrado</Message>
      }
    </div>
  )
}

export async function getServerSideProps (context: any) {
  const name = context.params.name // Get ID from slug `/book/1`
  let data = {}
  try {
    const { pokemon } = await PokemonService.getPokemonByName(name)
    data = pokemon
  } catch (err) {
    console.log('errorrrr', err)
  }
  return {
    props: { pokemon: data }// will be passed to the page component as props
  }
}

export default PokemonDetail
