import FormContato from '../components/Contato'
import { FaqAT } from '../components/FAQAT'
import { Clientes } from '../components/Home/Clientes'
import {Container, HeaderAutoPecas, Description, Tab, Card} from '../styles/styles.segmento'
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
                <h1>AUTO PEÇAS</h1>
                </div>
            </HeaderAutoPecas>
        

        <Description>
            <header>
                <div></div>

                <h1>Sistema INterfac</h1>
            </header>

            
            <p>Buscamos oferecer melhoria de processos de sua empresa através do nosso sistema, com robustez e agilidade no gerenciamento. O sistema INterfac é o sistema mais robusto para o gerenciamento de processos do seu negócio, 
        contamos com uma gama de serviços automatizados, como controle de estoque, venda direta, emissão de nota fiscal, importação das informações, cotação entre outras funcionalidades.
        
        Confira a baixo alguns dos setores em que atuamos e também as funcionalidades do sistema em cada segmento:</p>

            
          
        </Description>


        <FaqAT/>
        

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

