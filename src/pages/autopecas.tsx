import FormContato from '../components/Contato'
import { FaqAT } from '../components/FAQAT'
import { Clientes } from '../components/Home/Clientes'
import {Container, HeaderAutoPecas, Description, Tab, Card, ContainerTabs} from '../styles/styles.segmento'
import Head from 'next/head'


export default function AutoPecas() {



    return (
        <Container>

            <Head>
                <title>Auto Peças</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
           
            <HeaderAutoPecas>
            <div>
                <h4>SEGMENTO</h4>
                <h1>AUTO PEÇAS</h1>
                <h3>INterfac • Tecnologia e Informática</h3>
            </div>
            </HeaderAutoPecas>
        

        <Description>
            <header>
                <h1>Sistema INterfac</h1>
            </header>

            
            <p>Buscamos oferecer melhoria de processos de sua empresa através do nosso sistema, com robustez e agilidade no gerenciamento. O sistema INterfac é o sistema mais robusto para o gerenciamento de processos do seu negócio, 
        contamos com uma gama de serviços automatizados, como controle de estoque, venda direta, emissão de nota fiscal, importação das informações, cotação entre outras funcionalidades.
        </p>
        <p>Confira abaixo algumas das funcionalidades do nosso sistema para o segmento de Auto Peças:</p>

            
          
        </Description>


        <FaqAT/>
        

        <Clientes/>

        <ContainerTabs>

        <Tab>
            <div className="containerTab">
                <div className="title">
                    <h2 className="limite">SEM LIMITE</h2>
        
                </div>

                <ul>
                    <li> <strong className="green">✓</strong> Treinamento horário de início e término pré-agendado </li>
                    <li> <strong className="green">✓</strong> Suporte técnico via telefone </li>
                    <li> <strong className="green">✓</strong> Suporte técnico via acesso remoto</li>
                </ul>


                
                </div>
        </Tab>

        <Tab>
            <div className="containerTab">
                <div className="title">
                    <h2 className="zero">0%</h2>
                </div>

                <ul>
                    <li> <strong>✖</strong> Taxa de cancelamento </li>
                    <li> <strong>✖</strong> Cobrança por atendimento telefônico </li>
                    <li> <strong>✖</strong> Cobrança por atendimento por conexão remota</li>
                </ul>


                
                </div>
        </Tab>

        </ContainerTabs>

       


        <FormContato/>


        </Container>
    )
}

