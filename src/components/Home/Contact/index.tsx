import {Container, ButtonContato} from './styles'



export function Contact() {



    return (
        <Container>

            <div className="containerContato">
                <div className="title">
                    <h2>Entre em contato</h2>
                    <h4>Nossa equipe está pronta para atender as necessidades da sua empresa</h4>
                

                    <nav>
                        <a href=""><img src="/img/contato/whatsapp.png" alt="whatsapp"/></a>
                        <a href=""><img src="/img/contato/mail.png" alt="mail"/></a>
                        <a href=""><img src="/img/contato/phone.png" alt="phone"/></a>
                        <a href=""><img src="/img/contato/address.png" alt="address"/></a>
                        
                    </nav>
                
                </div>

                <ButtonContato> <img src="/img/contato/contato.png" alt=""/> Contato</ButtonContato>


                
                </div>
           
        </Container>
    )
}

