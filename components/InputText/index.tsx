
import { Container, Input } from './styles'

export default function InputText (props: any) {
  return (
    <Container>
      <Input type="text" onChange={props.onChange} {...props} />
    </Container>
  )
}
