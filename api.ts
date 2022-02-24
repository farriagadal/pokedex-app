import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/'
})

instance.interceptors.request.use((config) => {
  return config
})

instance.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error)
)

export default instance
