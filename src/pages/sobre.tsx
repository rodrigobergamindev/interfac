
import {Container, Header, AboutMobile} from '../styles/styles.sobre'
import Head from 'next/head'


export default function Sobre() {



    return (
        <Container>

            <Head>
                <title>Sobre</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
           
            <Header>
                <div className="container">
                    <img src="/img/sobre/about.jpg" alt="" className="about"/>
                
                <div className="description">
                    <h2>SOBRE NÓS</h2>
                    <h3>conectamos empresas e pessoas</h3>
                    <h3>através da nossa <strong>tecnologia</strong></h3>

                    <div className="textDescription">
                    <p>O sistema INterfac é o melhor sistema de gestão desenvolvido por uma equipe técnica capacitada e com larga vivência na criação de 
                        softwares de gestão, e com a consultoria e participação ativa de profissionais com mais de 20 anos de experiência e conhecimento no segmento de varejo.</p>
                        <p>É a soma da experiencia entre tecnologia de última geração com os processos diários e de gestão de nossos clientes.
                        Através do sistema de gestão integrado você consolida com total segurança todas as informações de sua empresa.
                        </p>
                    </div>
                <div className="metrics">

                    <div className="cardMetric">
                        <img src="/img/metrics/experiencia.png" alt="icon"/>
                        <h4>20<strong>+</strong></h4>
                        <span>de experiencia em automação com profissionais em constante evolução</span>
                    </div>

                    <div className="cardMetric">
                        <img src="/img/metrics/colaboradores.png" alt="icon"/>
                        <h4>12</h4>
                        <span>colaboradores capacitados e certificados</span>
                    </div>

                    <div className="cardMetric">
                        <img src="/img/metrics/clientes.png" alt="icon"/>
                        <h4>300<strong>+</strong></h4>
                        <span>clientes impactados pelas nossas soluções</span>
                    </div>
                </div>
                </div>
                </div>
                
            </Header>



            <AboutMobile>

            <div className="container">
                    <img src="/img/sobre/about.jpg" alt="" className="about"/>
                
                <div className="description">
                    <h2>SOBRE NÓS</h2>
                    <h3>conectamos empresas e pessoas</h3>
                    <h3>através da nossa <strong>tecnologia</strong></h3>


                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and 
                        scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
                        remaining essentially unchanged. It was popularised in the 1960s with the release of 
                        Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker 
                        including versions of Lorem Ipsum.</p>

                <div className="metrics">

                    <div className="cardMetric">
                        <img src="/img/metrics/experiencia.png" alt="icon"/>
                        <h4>20<strong>+</strong></h4>
                        <span>anos de experiência no setor industrial e automotivo</span>
                    </div>

                    <div className="cardMetric">
                        <img src="/img/metrics/colaboradores.png" alt="icon"/>
                        <h4>10</h4>
                        <span>colaboradores capacitados para te atender</span>
                    </div>

                    <div className="cardMetric">
                        <img src="/img/metrics/clientes.png" alt="icon"/>
                        <h4>100<strong>+</strong></h4>
                        <span>clientes impactados pelas nossas soluções</span>
                    </div>
                </div>
                </div>
                </div>

            </AboutMobile>
        

        </Container>
    )
}

