import {Container, ContainerAsks} from './styles'
import {TabTwo} from './Asks/TabTwo/index'
import {TabFive} from './Asks/TabFive/index'
import {TabThree} from './Asks/TabThree/index'
import {TabSeven} from './Asks/TabSeven/index'
import {TabOne} from './Asks/TabOne/index'
import { TabSix } from './Asks/TabSix'
import { TabFour } from './Asks/TabFour'
import { TabEight } from './Asks/TabEight'
import { TabNine } from './Asks/TabNine'
import { TabTen } from './Asks/TabTen'
import { TabEleven } from './Asks/TabEleven'
import { TabTwelve } from './Asks/TabTwelve'


export function FaqCT() {



    return (
        <Container>

                <div className="title">

                <h2>Funcionalidades</h2>

                </div>
            
    

            <ContainerAsks>

            
                <TabTwo/>
                <TabFive/>
                <TabThree/>
                <TabSeven/>
                <TabOne/>
                <TabSix/>
                <TabFour/>
                <TabEight/>
                <TabNine/>
                <TabTen/>
                <TabEleven/>
                <TabTwelve/>
               
            </ContainerAsks>
        </Container>
    )
}

