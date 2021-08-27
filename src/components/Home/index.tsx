import {Container} from './styles'
import {Slider} from './Slider/index'
import { ProductsContent } from './Products'
import { About } from './About'
import { Catalogs } from './Catalogs/index'
import {Faq} from './FAQ/index'
import {Contact} from './Contact/index'
import {Footer} from '../Footer/Footer'
import { Sistema } from './Sistema'


export function Home() {



    return (
        
        <Container>
        <Slider/>
        <Sistema/>
        </Container>
    )
}

