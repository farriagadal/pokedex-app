import api from 'api'
// import FilterParams from 'src/models/filter-params'
// import Article from 'src/models/article'

const getPokemons = ({ url }: any) => new Promise((resolve, reject) => {
  const urlTemp = url || '/pokemon'
  console.log('urlTemp', urlTemp)
  api.get(urlTemp)
    .then((response: any) => {
      resolve({ pokemons: response.results, nextPage: response.next })
    })
    .catch((err) => {
      reject(err)
    })
})

const getPokemonDetail = (url: string) => new Promise((resolve, reject) => {
  api.get(url)
    .then((response: any) => {
      resolve({ pokemon: response })
    })
    .catch((err) => {
      reject(err)
    })
})

export default {
  getPokemons,
  getPokemonDetail
}
