import {Container} from './styles'
import Link from 'next/link'




export function Logo() {
   

    return (
        <Link href="/">
            <Container>
                <img src='/img/logo.jpeg' alt="" />
            </Container>
        </Link>
        
    )
}

