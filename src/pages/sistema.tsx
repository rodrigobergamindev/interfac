import FormContato from '../components/Contato'
import { Faq } from '../components/FAQ'
import { Clientes } from '../components/Home/Clientes'
import {Container, Header, Description, Tab, Card} from '../styles/styles.sistema'



export default function Sistema() {



    return (
        <Container>
           
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

        


    <p>Buscamos oferecer a melhoria de processos da sua empresa através do nosso sistema. O sistema INterfac é o sistema mais robusto e ágil para o gerenciamento de processos do seu negócio, 
        contamos com uma gama de serviços automatizados, como controle de estoque, venda direta, emissão de nota fiscal, importação das informações, cotação dentre outros.
        
        Confira a baixo alguns dos setores em que atuamos e também as funcionalidades do sistema em cada segmento:</p>



             <section>

                 <h1>MODELOS DE NEGÓCIO</h1>
                 <Card>
                    <img src="/img/topics/centroauto.png" alt="icon" className="icon"/>

                    
                    <div className="description">
                        <h3>Centro Automotivo</h3>
                        <h4>Saiba Mais <img src="img/icons/right.png" alt="right" /> </h4>
                    </div>
                 </Card>

                 <Card>
                    <img src="/img/topics/autopecas.png" alt="icon" className="icon"/>

                    
                    <div className="description">
                        <h3>Auto Peças</h3>
                        <h4>Saiba Mais <img src="img/icons/right.png" alt="right" /> </h4>
                    </div>
                 </Card>

                 <Card>
                    <img src="/img/topics/construcao.png" alt="icon" className="icon"/>

                    
                    <div className="description">
                        <h3>Construção</h3>
                        <h4>Saiba Mais <img src="img/icons/right.png" alt="right" /> </h4>
                    </div>
                 </Card>
             </section>
          
        </Description>

        

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

