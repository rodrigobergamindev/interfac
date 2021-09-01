import {StyledFooter, Container} from './styles'

import Link from 'next/link'

export function Footer() {
    return (
        <Container>

        
        <StyledFooter>
        
           
               
                <Link href="/">
                <div className="description">
                <img src="/img/logo.jpeg" alt="" />
                    <span>Rua Caraipe das Águas, 1194 - Sobre Loja</span>
                    <span>Jardim dos Ypês – São Paulo, SP</span>
                    <span>CEP: 08161-360</span>
                </div>
                </Link>
            
                <div className="mapa">

                <h4>MAPA DO SITE</h4>
                <nav>
                    <Link href="/">Home</Link>
                    <Link href="/sobre">Sobre</Link>
                    <Link href="/solucoes">Soluções</Link>
                    <Link href="/sistema">Sistema</Link>
                    <Link href="/contato">Contato</Link>
                    
                </nav>
                </div>
    

            <div className="contatos">

                <h4>CONTATO</h4>
               <nav>
                   <Link href="mailto: interfac@interfac.com.br"><div><img src="/img/icons/mailfooter.png" alt="e-mail" /> <span>interfac@interfac.com.br</span></div></Link>
                   <Link href="https://api.whatsapp.com/send?phone=5511976789680&text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20uma%20cota%C3%A7%C3%A3o%20para%20minha%20empresa."><div><img src="/img/icons/whatsfooter.png" alt="whatsapp" /> <span>+55 11 97678-9680</span></div></Link>
                   <Link href="tel:551120588586"><div><img src="/img/icons/phonefooter.png" alt="phone" /> <span>+55 11 2058-8586</span></div></Link>
               </nav>
            </div>


            

           
       
        </StyledFooter>

        <span className="footer">INterfac • Tecnologia e Informática - Todos os direitos reservados </span>

        </Container>
    )
}
