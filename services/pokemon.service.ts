import api from 'api'
// import FilterParams from 'src/models/filter-params'
// import Article from 'src/models/article'

const getPokemons = ({ url }: any) => new Promise((resolve, reject) => {
  const urlTemp = url || '/pokemon'
  // console.log('urlTemp', urlTemp)
  api.get(urlTemp)
    .then((response: any) => {
      resolve({ pokemons: response.results, nextPage: response.next })
    })
    .catch((err) => {
      reject(err)
    })
})

const getPokemonByName = (name: string) => new Promise<any>((resolve, reject) => {
  api.get(`/pokemon/${name}`)
    .then((response: any) => {
      console.log('dddddddd', response)

      resolve({ pokemon: response })
    })
    .catch((err) => {
      console.log('err sssssssss', err)
      reject(err)
    })
})

const getPokemonByUrl = (url: string) => new Promise((resolve, reject) => {
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
  getPokemonByName,
  getPokemonByUrl
}
