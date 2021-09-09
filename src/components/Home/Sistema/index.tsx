import {Container, Content, Topic, ButtonSaibaMais} from './styles'
import {topics} from './assets/topics'
import Typical from 'react-typical'

import Link from 'next/link'


export function Sistema() {

    

    const frase = 'Atuamos no mercado há mais de vinte anos no segmento automotivo, industrial e de material de construção. Conheça mais sobre as funcionalidades do nosso sistema:'


    return (
        <Container>

           <Content>
                <div className="title">
                    <h1>Sistema INterfac</h1>
                    <Typical
                    steps={[frase, 5000, frase, 5000]}
                    loop={Infinity}
                    wrapper="h4"
                    />
                </div>

                
                <div className="topics">


                    {topics.map((topic, index) => {
                        return (
                            <Topic key={index}>
                                <img src={topic.img} alt="topic"/>
                                <div className="description">
                                    <h3>{topic.title.toUpperCase()}</h3>
                                    <p>
                                        {topic.description}
                                    </p>
                                    <Link href="/sistema">
                                   
                                    <ButtonSaibaMais>Saiba mais</ButtonSaibaMais>
                                    </Link>
                                </div>
                            </Topic>
                        )
                    })}

                </div>
           

           <div className="segmentos">
               <h3>Segmentos que atuamos</h3>

               <div className="containerSegmentos">
                   <div className="cardap">

                    

                        <span>Auto Peças</span>
                   </div>

                   <div className="cardca">

                       

                        <span>Centro Automotivo</span>
                    </div>

                    <div className="cardmt">

                   

                        <span>Material de Construção</span>
                    </div>

                    <div className="cardda">

                   

                        <span>Distribuidora de Auto Peças</span>
                    </div>

                    <div className="cardmp">

                   

                        <span>Moto Peças</span>
                    </div>

                    <div className="cardcm">

                   

                        <span>Comércio de Aviamentos</span>
                    </div>

                    <div className="cardlf">

                   

                        <span>Loja de Ferragens</span>
                    </div>

                    <div className="cardlr">

                   

                        <span>Loja de Ração</span>
                    </div>
               </div>
           </div>
           
           </Content>

        </Container>
    )
}

