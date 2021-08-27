import {Container, Content, Topic, ButtonSaibaMais} from './styles'
import {topics} from './assets/topics'



export function Sistema() {



    return (
        <Container>

           <Content>
                <div className="title">
                    <h1>Sistema INterfac</h1>
                    <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.</h4>
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

