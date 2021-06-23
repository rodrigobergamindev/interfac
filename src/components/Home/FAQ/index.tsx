import {Container, ContainerAsks} from './styles'
import {TabGarantia} from './Asks/Garantia/index'
import {TabComposicao} from './Asks/Composicao/index'
import {TabCompatibilidade} from './Asks/Compatibilidade/index'
import {TabDurabilidade} from './Asks/Durabilidade/index'
import {TabTroca} from './Asks/Troca/index'

export function Faq() {



    return (
        <Container>

                <div className="title">

                <h2>Está com alguma dúvida?</h2>

                </div>
            
    

            <ContainerAsks>

            
                <TabGarantia/>
                <TabComposicao/>
                <TabCompatibilidade/>
                <TabDurabilidade/>
                <TabTroca/>
            </ContainerAsks>
        </Container>
    )
}

