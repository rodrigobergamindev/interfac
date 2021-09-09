
import {Container} from './styles'
import { CarouselProducts } from './Carousel'


export function Solucoes() {



    return (
       
        <Container>

            <div className="servicesContainer">

                <div className="description">
                    <h2>Conheça as nossas <strong>SOLUÇÕES</strong></h2>
                    <span>Possuimos uma gama de serviços em informática para atender as necessidades da sua empresa</span>
                </div>
            
            <CarouselProducts/>
            
            </div>
       

        </Container>
        
    )
}

