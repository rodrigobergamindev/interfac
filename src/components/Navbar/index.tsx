import {Container, Nav, ContainerNav, DropdownMenu, SubMenu, ContainerSubMenu, SubContainer} from './styles'
import {useState} from 'react'
import {menu} from './assets/nav'
import Link from 'next/link'

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
                <Link key={index} href={item.url}>{item.title}</Link>
            )
        })}
      </ContainerNav>

   
      </Nav>

      
    </Container>
  )
}

