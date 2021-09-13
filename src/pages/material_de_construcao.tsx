import FormContato from '../components/Contato'
import { FaqCT } from '../components/FAQCT'
import { Clientes } from '../components/Home/Clientes'
import {Container, HeaderConstrucao, Description, Tab, Card, ContainerTabs} from '../styles/styles.segmento'
import Head from 'next/head'


export default function Construcao() {



    return (
        <Container>

            <Head>
                <title>Material de Construção</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
           
            <HeaderConstrucao>
            <div>
                <h4>SEGMENTO</h4>
                <h1>MATERIAL DE CONSTRUÇÃO</h1>
                <h3>INterfac • Tecnologia e Informática</h3>
            </div>
            </HeaderConstrucao>
        

        <Description>
            <header>
               <h1>Sistema INterfac</h1>
            </header>

            
            <p>Buscamos oferecer melhoria de processos de sua empresa através do nosso sistema, com robustez e agilidade no gerenciamento. O sistema INterfac é o sistema mais robusto para o gerenciamento de processos do seu negócio, 
        contamos com uma gama de serviços automatizados, como controle de estoque, venda direta, emissão de nota fiscal, importação das informações, cotação entre outras funcionalidades.
        </p>
        <p>Confira abaixo algumas das funcionalidades do nosso sistema para o segmento de Material de Construção:</p>


            
          
        </Description>


        <FaqCT/>
        

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

