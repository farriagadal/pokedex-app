import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Container } from 'components/styles/Container'
import Logo from 'components/Logo'

function MyApp ({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Logo />
      <Component {...pageProps} />
    </Container>
  )
}

export default MyApp
