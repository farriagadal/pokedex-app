
import { Container, Input } from './styles'
import { useRouter } from 'next/router'

export default function InputSearch (props: any) {
  const router = useRouter()

  const searchPokemon = (event: any) => {
    if (!event.target.value) return
    const value = event.target.value.toLowerCase()
    router.push(`/pokemon/${value}`)
  }

  return (
    <Container>
      <Input type="text" onChange={(event: any) => searchPokemon(event)} {...props} />
    </Container>
  )
}

// router.push(`/pokemon/${data.value}`)
