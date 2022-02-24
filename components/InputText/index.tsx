
import { Container, Input } from './styles'
import { useRouter } from 'next/router'

export default function InputText (props: any) {
  const router = useRouter()

  const searchPokemon = (value: any) => {
    if (!value) return
    router.push(`/pokemon/${value}`)
  }

  return (
    <Container>
      <Input type="text" onChange={(data: any) => searchPokemon(data.target.value)} {...props} />
    </Container>
  )
}

// router.push(`/pokemon/${data.value}`)
