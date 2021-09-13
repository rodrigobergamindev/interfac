import FormContato from '../components/Contato'
import { Faq } from '../components/FAQ'
import { Clientes } from '../components/Home/Clientes'
import {Container,Description, Tab, HeaderFerragens, ContainerTabs} from '../styles/styles.segmento'
import Head from 'next/head'


export default function Ferragens() {



    return (
        <Container>

        <Head>
            <title>Loja de Ferragens</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
           
            <HeaderFerragens>
            <div>
                <h4>SEGMENTO</h4>
                <h1>LOJA DE FERRAGENS</h1>
                <h3>INterfac • Tecnologia e Informática</h3>
            </div>
            </HeaderFerragens>
        

        <Description>
            <header>
                <h1>Sistema INterfac</h1>
            </header>

            
            <p>Buscamos oferecer melhoria de processos de sua empresa através do nosso sistema, com robustez e agilidade no gerenciamento. O sistema INterfac é o sistema mais robusto para o gerenciamento de processos do seu negócio, 
        contamos com uma gama de serviços automatizados, como controle de estoque, venda direta, emissão de nota fiscal, importação das informações, cotação entre outras funcionalidades.
        </p>

        <p>Confira abaixo algumas das funcionalidades do nosso sistema para uma Loja de Ferragens:</p>


            
          
        </Description>


        <Faq/>
        

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

