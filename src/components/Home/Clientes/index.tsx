
import {Container} from './styles'
import { CarouselProducts } from './Carousel'


export function Clientes() {



    return (
       
        <Container>

            <div className="clientesContainer">

                <div className="description">
                    <h1>Clientes satisfeitos</h1>
                    <span>negócios transformados pela nossa <strong>tecnologia</strong></span>
                </div>
            
            <CarouselProducts/>
            
            </div>
       

        </Container>
        
    )
}

