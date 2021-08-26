import {Container, Nav, ContainerNav, DropdownMenu, SubMenu, ContainerSubMenu, SubContainer} from './styles'
import {Logo} from '../Logo/index'
import {Contato} from './Contato'
import {useState} from 'react'
import {menu} from './assets/nav'

export function Navbar() {

  const [active, setActive] = useState(false);

  return (
    
    <Container>
      <Nav>

      
      <img src='/img/logo.png' alt="" />

      <ContainerNav>
        {menu.map((item, index) => {
          if(item.title === 'Soluções') {
            return (
              <DropdownMenu active={active}
              onClick={() => setActive(!active)}
              key={index} 
              ><span>{item.title}</span><img className="arrow" src="/img/icons/down.png" alt="submenu"></img>
              </DropdownMenu>
            )
          }
            return (
                <li key={index}><a href={item.url}>{item.title}</a></li>
            )
        })}
      </ContainerNav>

   
      </Nav>

      <SubMenu active={active} onMouseLeave={() => setActive(false)}>

      <SubContainer>

      
      <ContainerSubMenu>
      
        <h4>BERLOQUES</h4>
      <ul>
        <li><a href="https://drive.google.com/file/d/1pHZwoHLbDR6YSiz-Ysjl_WEZn5lxzAHa/view?usp=sharing" target="_blank">Banhados a Prata</a></li>
        <li><a href="https://drive.google.com/file/d/1hC5SKjVXnaO2kPHDbfAlM5qEfoFtwIzx/view?usp=sharing" target="_blank">Folheados</a></li>
        <li><a href="https://drive.google.com/file/d/11w3wvm8LTTHzFalvULpu5pIc6BC1HP4C/view?usp=sharing" target="_blank">Níquel Free</a></li>
      </ul>
      
      </ContainerSubMenu>
      
      <ContainerSubMenu>
      <a href="https://drive.google.com/file/d/1Au_1vcOvM_DSm686KKpyBsvuuAg93qyY/view?usp=sharing" target="_blank">
        <h4>PULSEIRAS</h4>
      <ul>
        <li>Banhadas a Prata</li>
        <li>Envernizadas</li>
        <li>Braceletes</li>
      </ul>
      </a>
      </ContainerSubMenu>

      </SubContainer>

      </SubMenu>
    </Container>
  )
}

