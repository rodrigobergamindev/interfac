import FormContato from '../components/Contato'
import { Clientes } from '../components/Home/Clientes'
import {Container, Header, Description, Tab, Card, SecondTab} from '../styles/styles.sistema'
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

                <h1>Sistema INterfac</h1>
            </header>

        


    <p>Buscamos oferecer melhoria de processos de sua empresa através do nosso sistema, com robustez e agilidade no gerenciamento. O sistema INterfac é o sistema mais robusto para o gerenciamento de processos do seu negócio, 
        contamos com uma gama de serviços automatizados, como controle de estoque, venda direta, emissão de nota fiscal, importação das informações, cotação entre outras funcionalidades.
        
        Confira a baixo alguns dos setores em que atuamos e também as funcionalidades do sistema em cada segmento:</p>



             <section>
             <h1>MODELOS DE NEGÓCIO</h1>
             <div className="containerCards">
                 

                 <Link href="/centroautomotivo">
                 <Card>
                    <img src="/img/topics/centroauto.png" alt="icon" className="icon"/>

                    
                    <div className="description">
                        <h3>Centro Automotivo</h3>
                        
                            <h4>Saiba Mais <img src="img/icons/right.png" alt="right" /> </h4>
                        
                    </div>
                 </Card>
                 </Link>

                 <Link href="/autopecas">
                 <Card>
                    <img src="/img/topics/autopecas.png" alt="icon" className="icon"/>

                    
                    <div className="description">
                        <h3>Auto Peças</h3>
                       
                            <h4>Saiba Mais <img src="img/icons/right.png" alt="right" /> </h4>
                        
                    </div>
                 </Card>
                 </Link>
                
                 <Link href="/material_de_construcao">
                 <Card>
                    <img src="/img/topics/construcao.png" alt="icon" className="icon"/>

                    
                    <div className="description">
                        <h3>Material de Construção</h3>
                        

                        
                            <h4>Saiba Mais <img src="img/icons/right.png" alt="right" /> </h4>
                        
                    </div>
                 </Card>
                 </Link>

                 <Link href="/distribuidora_de_autopecas">
                 <Card>
                    <img src="/img/topics/distribuidora.png" alt="icon" className="icon"/>

                    
                    <div className="description">
                        <h3>Distribuidora de Auto Peças</h3>
                        

                        
                            <h4>Saiba Mais <img src="img/icons/right.png" alt="right" /> </h4>
                        
                    </div>
                 </Card>
                 </Link>

                 <Link href="/loja_de_racao">
                 <Card>
                    <img src="/img/topics/racao.png" alt="icon" className="icon"/>

                    
                    <div className="description">
                        <h3>Loja de Ração</h3>
                        

                        
                            <h4>Saiba Mais <img src="img/icons/right.png" alt="right" /> </h4>
                        
                    </div>
                 </Card>
                 </Link>

                 <Link href="/loja_de_ferragens">
                 <Card>
                    <img src="/img/topics/ferragens.png" alt="icon" className="icon"/>

                    
                    <div className="description">
                        <h3>Loja de Ferragens</h3>
                        

                        
                            <h4>Saiba Mais <img src="img/icons/right.png" alt="right" /> </h4>
                        
                    </div>
                 </Card>
                 </Link>

                 <Link href="/comercio_de_aviamentos">
                 <Card>
                    <img src="/img/topics/aviamentos.png" alt="icon" className="icon"/>

                    
                    <div className="description">
                        <h3>Comércio de Aviamentos</h3>
                        

                        
                            <h4>Saiba Mais <img src="img/icons/right.png" alt="right" /> </h4>
                        
                    </div>
                 </Card>
                 </Link>

                 <Link href="/motopecas">
                 <Card>
                    <img src="/img/topics/motopecas.png" alt="icon" className="icon"/>

                    
                    <div className="description">
                        <h3>Motopeças</h3>
                        

                        
                            <h4>Saiba Mais <img src="img/icons/right.png" alt="right" /> </h4>
                        
                    </div>
                 </Card>
                 </Link>
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
                    <li> ✓ Treinamento horário de início e término pré-agendado </li>
                    <li> ✓ Suporte técnico via telefone </li>
                    <li> ✓ Suporte técnico via acesso remoto</li>
                </ul>


                
                </div>
        </Tab>

        <SecondTab>
            <div className="containerTab">
                <div className="title">
                    <h2>0%</h2>
                </div>

                <ul>
                    <li> <strong>✖</strong> Taxa de cancelamento </li>
                    <li> <strong>✖</strong> Cobrança por atendimento telefônico </li>
                    <li> <strong>✖</strong> Cobrança por atendimento por conexão remota</li>
                </ul>


                
                </div>
        </SecondTab>


        <FormContato/>


        </Container>
    )
}

