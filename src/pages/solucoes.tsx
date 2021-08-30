import {Container, Header, Description, ButtonContato, CardProduct, SectionDesc, Grade, Sistema} from '../styles/styles.solucoes'
import {carouselItems} from '../components/Home/Solucoes/Carousel/assets/carouselItems'



export default function Solucoes() {



    return (
        <Container>
           
            <Header>
                <div>
                <h1>SOLUÇÕES</h1>
                <h3>Nossa missão é alavancar o seu negócio através das nossas soluções em TI, contamos com uma equipe especializada e pronta para atender as suas necessidades.</h3>
                </div>
            </Header>
        

            <Description>
            <SectionDesc>
                <h3>PRINCIPAIS</h3>
                <h1>SERVIÇOS</h1>

                <p>Nossa missão é identificar as necessidades da sua empresa e entregar excelência e qualidade através das nossas soluções, agregando ainda mais valor ao seu negócio.</p>

                <h3>FICOU COM ALGUMA</h3>
                <h1>DÚVIDA?</h1>

                <ButtonContato>FALE COM UM CONSULTOR <img src="/img/icons/whatsapp.png" alt="whatsapp"/></ButtonContato>
            </SectionDesc>


            <Grade>
            {carouselItems.map((item, index) =>{
                return (
                          <a href={item.url} key={index}>
                          <CardProduct>
                          
                              <img src={item.iconColor} alt="" />
                            <div className="title">

                            <h3>
                              {item.title.toUpperCase()}
                            </h3>
                            <button>Saiba Mais <img src="img/icons/right-white.png"/></button>

                            </div>
                        
                      
                            
                          </CardProduct>
                          </a>
                 
                )
      })}
            </Grade>
        </Description>

            <Sistema>
                    <div className="containerSistema">
                        <header>
                            <div>
                                <h2>Sistema INterfac</h2>
                            </div>
                            <div>
                                <h2>conheça a mais robusta</h2>
                                <h4>e completa <strong>aplicação</strong> para sua empresa</h4>
                            </div>
                        </header>


                        <section className="description">

                                <div className="topics">
                                <ul>
                                    <li> <img src="/img/icons/check.png" alt=""/> Robusto e ágil</li>
                                    <li> <img src="/img/icons/check.png" alt=""/> Controle de acesso a usuários</li>
                                    <li> <img src="/img/icons/check.png" alt=""/> Permite acesso remoto</li>
                                    <li> <img src="/img/icons/check.png" alt=""/> Rotina de backup</li>
                                    <li> <img src="/img/icons/check.png" alt=""/> Suporte técnico especializado</li>
                                    <li> <img src="/img/icons/check.png" alt=""/> Constante atualização</li>
                                </ul>

                                <button>saiba mais <img src="img/icons/right.png"/></button>
                                </div>

                            <img className="imgSistema" src="/img/sistema.jpg" alt=""/>
                        </section>

                    </div>


            </Sistema>



        </Container>
    )
}
