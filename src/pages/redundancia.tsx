import FormContato from '../components/Contato'
import {Container, Header, Description} from '../styles/styles.servicos'
import Head from 'next/head'


export default function Redundancia() {



    return (
        <Container>
            
            <Head>
                <title>Redundancia</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

           
            <Header>
                <div>
                <h1>RENDUNDÂNCIA</h1>
                <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h3>
                </div>
            </Header>
        

        <Description>
            <header>
                <div></div>

                <h1>REDUNDÂNCIA DE SERVIDORES</h1>
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

        
        <FormContato/>


        </Container>
    )
}

