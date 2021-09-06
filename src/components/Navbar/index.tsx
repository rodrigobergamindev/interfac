import {Container, Nav, ContainerNav, DropdownMenu, SubMenu, ContainerSubMenu, SubContainer} from './styles'
import {menu} from './assets/nav'
import Link from 'next/link'
import { ActiveLink } from '../ActiveLink'


export function Navbar() {

 

  return (
    
    <Container>

      <Nav>

      <Link href="/">
        <div className="logo">

        
        <img src='/img/logo.jpeg' alt="logo" />

        </div>
      </Link>

      
      <ContainerNav>
        {menu.map((item, index) => {
            return (
                <ActiveLink key={index} href={item.url} activeClassName="active"><a>{item.title}</a></ActiveLink>
            )
        })}
      </ContainerNav>

   
      </Nav>

      
    </Container>
  )
}

