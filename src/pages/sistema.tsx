import FormContato from '../components/Contato'
import { Clientes } from '../components/Home/Clientes'
import {Container, Header, Description, Tab, Card} from '../styles/styles.sistema'
import Link from 'next/link'
import Head from 'next/head'

export default function Sistema() {



    return (
        <Container>

            <Head>
                <title>Sistema INterfac</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
           
            <Header>
                <div>
                <h1>INterfac</h1>
                </div>
            </Header>
        

        <Description>
            <header>
                <div></div>

                <h1>APLICAÇÃO INterfac</h1>
            </header>

        


    <p>Buscamos oferecer melhoria de processos de sua empresa através do nosso sistema, com robustez e agilidade no gerenciamento. O sistema INterfac é o sistema mais robusto para o gerenciamento de processos do seu negócio, 
        contamos com uma gama de serviços automatizados, como controle de estoque, venda direta, emissão de nota fiscal, importação das informações, cotação entre outras funcionalidades.
        
        Confira a baixo alguns dos setores em que atuamos e também as funcionalidades do sistema em cada segmento:</p>



             <section>
                
             <div className="containerCards">
                 <h1>MODELOS DE NEGÓCIO</h1>

                 
                 <Card>
                    <img src="/img/topics/centroauto.png" alt="icon" className="icon"/>

                    
                    <div className="description">
                        <h3>Centro Automotivo</h3>
                        <Link href="/centroautomotivo">
                            <h4>Saiba Mais <img src="img/icons/right.png" alt="right" /> </h4>
                        </Link>
                    </div>
                 </Card>

                 <Card>
                    <img src="/img/topics/autopecas.png" alt="icon" className="icon"/>

                    
                    <div className="description">
                        <h3>Auto Peças</h3>
                        <Link href="/autopecas">
                            <h4>Saiba Mais <img src="img/icons/right.png" alt="right" /> </h4>
                        </Link>
                    </div>
                 </Card>

                 <Card>
                    <img src="/img/topics/construcao.png" alt="icon" className="icon"/>

                    
                    <div className="description">
                        <h3>Construção</h3>
                        <Link href="/construcao">

                        
                            <h4>Saiba Mais <img src="img/icons/right.png" alt="right" /> </h4>
                        </Link>
                    </div>
                 </Card>
                 </div>
             </section>
          
        </Description>

        

        <Clientes/>


        <Tab>
            <div className="containerTab">
                <div className="title">
                    <h2 className="limite">SEM LIMITE</h2>
        
                </div>

                <ul>
                    <li> <img src="/img/icons/check.png" alt=""/> Treinamento horário de início e término pré-agendado </li>
                    <li> <img src="/img/icons/check.png" alt=""/> Suporte técnico via telefone </li>
                    <li> <img src="/img/icons/check.png" alt=""/> Suporte técnico via acesso remoto</li>
                </ul>


                
                </div>
        </Tab>

        <Tab>
            <div className="containerTab">
                <div className="title">
                    <h2>0%</h2>
                </div>

                <ul>
                    <li> <img src="/img/icons/check.png" alt=""/> Taxa de cancelamento </li>
                    <li> <img src="/img/icons/check.png" alt=""/> Cobrança por atendimento telefônico </li>
                    <li> <img src="/img/icons/check.png" alt=""/> Cobrança por atendimento por conexão remota</li>
                </ul>


                
                </div>
        </Tab>


        <FormContato/>


        </Container>
    )
}

