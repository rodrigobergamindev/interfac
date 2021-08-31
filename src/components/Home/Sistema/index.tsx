import {Container, Content, Topic, ButtonSaibaMais} from './styles'
import {topics} from './assets/topics'
import Typical from 'react-typical'



export function Sistema() {

    

    const frase = 'Atuamos no mercado a mais de dez anos no segmento automotivo, industrial e de construção. Conheça mais sobre as funcionalidades do nosso sistema:'


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
                                    <ButtonSaibaMais>Saiba mais</ButtonSaibaMais>
                                </div>
                            </Topic>
                        )
                    })}

                </div>
           </Content>

        </Container>
    )
}

