import {Container, Header, Description, Contato, ButtonContato} from '../styles/styles.servicos'



export default function Backup() {



    return (
        <Container>
           
            <Header>
                <div>
                <h1>BACULA</h1>
                <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h3>
                </div>
            </Header>
        

        <Description>
            <header>
                <div></div>

                <h1>BACULA (GERENCIAMENTO DE BACKUPS)</h1>
            </header>

            <article>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
             when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic 
             typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with 
             desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
             </p>
             <img src="/img/solucoes/linux.jpg" alt=""/>
            </article>
        </Description>

        
        <Contato>
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

                <ButtonContato> <img src="/img/contato/contato.png" alt=""/> Solicite sua cotação</ButtonContato>


                
                </div>
        </Contato>


        </Container>
    )
}

