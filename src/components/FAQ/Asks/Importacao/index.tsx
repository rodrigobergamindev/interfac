
import {useState} from 'react'
import {Tab, Container, ContainerTable} from './styles'
import {AskArea} from './ask'





export function TabImportacao() {

  const [active, setActive] = useState(false);
 
  
  return (
    <Container>

    <Tab active={active} onClick={()=> {setActive(!active)}} >
      <span><img src="/img/topics/importacao.png" alt="importacao" className="icon"/> IMPORTAÇÃO DAS INFORMAÇÕES</span>
      <img src="/img/icons/down.png" alt=""/>
    </Tab>

     <ContainerTable active={active}>
          <AskArea active={active}/>
        </ContainerTable>

    </Container>
  
  )
  
}
