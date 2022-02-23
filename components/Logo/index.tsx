
import { LogoContainer } from './styles'
import Link from 'next/link'
import Image from 'next/image'

export default function Logo () {
  return (
    <LogoContainer>
      <Link href="/home">
        <a>
          <Image src="/images/pokemon-logo.png" alt="" width={252} height={95} />
        </a>
      </Link>
    </LogoContainer>
  )
}
