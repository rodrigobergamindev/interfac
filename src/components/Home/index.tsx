import {Container} from './styles'
import {Slider} from './Slider/index'
import { Solucoes } from './Solucoes/index'
import {Faq} from '../FAQ/index'
import {Contact} from './Contact/index'
import { Sistema } from './Sistema'
import { Clientes } from './Clientes'


export function Home() {



    return (
        
        <Container>
        <Slider/>
        <Sistema/>
        <Solucoes/>
        <Clientes/>
        <Contact/>
        </Container>
    )
}

