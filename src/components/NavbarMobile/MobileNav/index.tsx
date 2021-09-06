import {Ul} from './styles'
import {menu} from '../../Navbar/assets/nav'
import Link from 'next/link'

interface MobileNavProps {
    open: boolean
}


export function MobileNavItems(props: MobileNavProps) {


  return (
    
    <Ul open={props.open}>
    {menu.map((item, index) => {
                 return (
                     <li key={index}>
                       <Link href={item.url}>
                         <span>{item.title}</span>
                         </Link>
                         </li>
                 )
             })}
 </Ul>
  
  )
}

