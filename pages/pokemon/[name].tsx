
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import InputSearch from 'components/InputSearch'
import PokemonService from 'services/pokemon.service'
import PokemonStats from 'components/PokemonStats'
import PokemonImage from 'components/PokemonImage'
import Message from 'components/Message'

const PokemonDetail: NextPage = ({ pokemon }: any) => {
  const router = useRouter()
  const { name } = router.query
  return (
    <div>
      <InputSearch placeholder="Buscar Pokémon" />
      { pokemon.id
        ? (
        <>
          <PokemonImage pokemon={pokemon} />
          <PokemonStats pokemon={pokemon} />
        </>
          )
        : <Message>Pokémon {`"${name}"`} no encontrado</Message>
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
    console.log(err)
  }
  return {
    props: { pokemon: data }
  }
}

export default PokemonDetail
