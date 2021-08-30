
import {useState} from 'react'
import {Tab, Container, ContainerTable} from './styles'
import {AskArea} from './ask'





export function TabPesquisa() {

  const [active, setActive] = useState(false);
 
  
  return (
    <Container>

    <Tab active={active} onClick={()=> {setActive(!active)}} >
      <span> <img src="/img/topics/codigo.png" alt="codigo" className="icon"/> PESQUISA POR CÓDIGOS</span>
      <img src="/img/icons/down.png" alt=""/>
    </Tab>

     <ContainerTable active={active}>
          <AskArea active={active}/>
        </ContainerTable>

    </Container>
  
  )
  
}
