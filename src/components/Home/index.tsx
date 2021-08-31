import {Container} from './styles'
import {Slider} from './Slider/index'
import { Solucoes } from './Solucoes/index'
import {Faq} from '../FAQ/index'
import { Sistema } from './Sistema'
import { Clientes } from './Clientes'
import FormContato from '../Contato'


export function Home() {



    return (
        
        <Container>
        <Slider/>
        <Sistema/>
        <Solucoes/>
        <Clientes/>
        <FormContato/>
        </Container>
    )
}

