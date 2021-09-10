import FormContato from '../components/Contato'
import {Container, Header, Description} from '../styles/styles.servicos'
import Head from 'next/head'


export default function Servidores() {



    return (
        <Container>

            <Head>
                <title>Servidores Linux</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
           
            <Header>
                <div>
                <h1 className="servidores">SERVIDORES LINUX</h1>
                </div>
            </Header>
        

        <Description>
            <header>
                <div></div>

                <h1>Servidores Linux (DEBIAN)</h1>
            </header>

            <article>

           

            <p>
                Com software estável e longos ciclos de lançamento, o Debian é uma das muitas grandes distribuições Linux que podem dar energia ao seu servidor. Você também não precisa procurar uma versão separada do Debian. Você pode simplesmente optar por não instalar um ambiente de área de trabalho durante a instalação e pegar as ferramentas relacionadas ao servidor.
            </p>

            <p>
                O software estável e testado por muito tempo é ótimo, mas muitos de nós desejam as versões mais recentes do software em nossos PCs. Quando aplicativos e interfaces ganham novos recursos, há uma espera de vários anos para eles chegarem ao Debian, mas tudo bem, é um pouco demais do que muitos de nós estamos dispostos a esperar.
            </p>

            <p>
                Felizmente, existem várias versões do Debian para você escolher. Embora o Debian Stable esteja desatualizado há vários anos, não é a única versão disponível. Se você optar pelo Teste do Debian, Instável ou Experimental, poderá escolher o equilíbrio entre estabilidade e ter os recursos mais recentes com os quais se sinta mais confortável.
            </p>

            
        
            </article>
        </Description>

        
        <FormContato/>


        </Container>
    )
}

