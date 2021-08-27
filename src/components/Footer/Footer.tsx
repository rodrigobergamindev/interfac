import {StyledFooter, Container} from './styles'

export function Footer() {
    return (
        <Container>

        
        <StyledFooter>
        
           
               

                <div className="description">
                <img src="/img/logo.png" alt="" />
                    <span>Rua Caraipe das Águas, 1194 - Sobre Loja</span>
                    <span>Jardim dos Ypês – São Paulo, SP</span>
                    <span>CEP: 08161-360</span>
                </div>

            
                <div className="mapa">

                <h4>MAPA DO SITE</h4>
                <nav>
                    <a href="#sobre">Sobre</a>
                    <a href="#produtos">Produtos</a>
                    <a href="#Comprar">Comprar</a>
                    <a href="#faq">Dúvidas Frequentes</a>
                    <a href="#contatos">Contatos</a>
                </nav>
                </div>
    

            <div className="contatos">

                <h4>CONTATO</h4>
               <nav>
                   <a><img src="/img/icons/mailfooter.png" alt="e-mail" /> <span>interfac@interfac.com.br</span></a>
                   <a><img src="/img/icons/whatsfooter.png" alt="whatsapp" /> <span>+55 11 97678-9680</span></a>
                   <a><img src="/img/icons/phonefooter.png" alt="phone" /> <span>+55 11 2058-8586</span></a>
               </nav>
            </div>


            

           
       
        </StyledFooter>

        <span className="footer">INterfac • Tecnologia e Informática - Todos os direitos reservados </span>

        </Container>
    )
}
