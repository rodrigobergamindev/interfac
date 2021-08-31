import FormContato from '../components/Contato'
import { Faq } from '../components/FAQ'
import { FaqAT } from '../components/FAQAT'
import { FaqCT } from '../components/FAQCT'
import { Clientes } from '../components/Home/Clientes'
import {Container, HeaderConstrucao, Description, Tab, Card} from '../styles/styles.segmento'



export default function Construcao() {



    return (
        <Container>
           
            <HeaderConstrucao>
                <div>
                <h1>MATERIAL DE CONSTRUÇÃO</h1>
                </div>
            </HeaderConstrucao>
        

        <Description>
            <header>
                <div></div>

                <h1>APLICAÇÃO INterfac</h1>
            </header>

            
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
             when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic 
             typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with 
             desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
             </p>

            
          
        </Description>


        <FaqCT/>
        

        <Clientes/>


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

        <Tab>
            <div className="containerTab">
                <div className="title">
                    <h2 className="limite">SEM</h2>
                    <h2 className="limite">LIMITE</h2>
                </div>

                <ul>
                    <li> <img src="/img/icons/check.png" alt=""/> Treinamento horário de início e término pré-agendado </li>
                    <li> <img src="/img/icons/check.png" alt=""/> Suporte técnico via telefone </li>
                    <li> <img src="/img/icons/check.png" alt=""/> Suporte técnico via acesso remoto</li>
                </ul>


                
                </div>
        </Tab>



        <FormContato/>


        </Container>
    )
}

