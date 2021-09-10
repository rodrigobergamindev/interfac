import {Container, Content, Topic, ButtonSaibaMais, ContainerModal, BodyModal, HeaderModal} from './styles'
import {topics} from './assets/topics'
import Typical from 'react-typical'
import {useState} from 'react'
import Modal from 'react-modal';

import Link from 'next/link'



export function Sistema() {

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
      }

      function closeModal() {
        setIsOpen(false);
      }


    

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

                <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                overlayClassName="react-modal-overlay"
                className="react-modal-content"
                >

            <ContainerModal>

        
            <HeaderModal>
                 <h2>Selecione seu <strong>segmento</strong></h2>
                <img src="/img/icons/close.png" alt="" onClick={closeModal}/>
            </HeaderModal>

            <BodyModal>
                <nav>
                    <Link href="/autopecas">Auto Peças</Link>
                    <Link href="/centroautomotivo">Centro Automotivo</Link>
                    <Link href="/material_de_construcao">Material de Construção</Link>
                    <Link href="/distribuidora_de_autopecas">Distribuidora de Auto Peças</Link>
                    <Link href="/motopecas">Moto Peças</Link>
                    <Link href="/comercio_de_aviamentos">Comércio de Aviamentos</Link>
                    <Link href="/loja_de_ferragens">Loja de Ferragens</Link>
                    <Link href="/loja_de_racao">Loja de Ração</Link>
                </nav>

            </BodyModal>
            </ContainerModal>
                </Modal>

                    {topics.map((topic, index) => {
                        return (
                            <Topic key={index}>
                                <img src={topic.img} alt="topic"/>
                                <div className="description">
                                    <h3>{topic.title.toUpperCase()}</h3>
                                    <p>
                                        {topic.description}
                                    </p>
                                  
                                   
                                    <ButtonSaibaMais onClick={openModal}>Saiba mais</ButtonSaibaMais>
                                    
                                </div>
                            </Topic>
                        )
                    })}

                </div>
           

           <div className="segmentos">
               <h3>Segmentos que atuamos</h3>

               <div className="containerSegmentos">

                   <Link href="/autopecas">
                   <div className="cardap">

                    

                        <span>Auto Peças</span>
                   </div>
                    </Link>

                    <Link href="/centroautomotivo">
                   <div className="cardca">

                       

                        <span>Centro Automotivo</span>
                    </div>
                    </Link>

                    <Link href="/material_de_construcao">
                    <div className="cardmt">

                   

                        <span>Material de Construção</span>
                    </div>
                    </Link>

                    <Link href="/distribuidora_de_autopecas">
                    <div className="cardda">

                   

                        <span>Distribuidora de Auto Peças</span>
                    </div>
                    </Link>

                    <Link href="/motopecas">
                    <div className="cardmp">

                   

                        <span>Moto Peças</span>
                    </div>
                    </Link>

                    <Link href="/comercio_de_aviamentos">
                    <div className="cardcm">

                   

                        <span>Comércio de Aviamentos</span>
                    </div>
                    </Link>

                    <Link href="/loja_de_ferragens">
                    <div className="cardlf">

                   

                        <span>Loja de Ferragens</span>
                    </div>
                    </Link>

                    <Link href="/loja_de_racao">
                    <div className="cardlr">

                   

                        <span>Loja de Ração</span>
                    </div>
                    </Link>
               </div>
           </div>
           
           </Content>

        </Container>
    )
}

