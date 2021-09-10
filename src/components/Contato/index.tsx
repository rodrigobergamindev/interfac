import axios from 'axios';
import {Form, Card, Section, Container} from './styles'
import { useState } from 'react'
import Link from 'next/link'

import * as EmailValidator from 'email-validator';
import { ToastContainer, toast } from 'react-toastify';



export default function FormContato() {


const [sent, setSent] = useState(false)
    
const [campos, setCampos] = useState({
    nome: '',
    email: '',
    telefone: '',
    empresa: '',
    segmento: '',
    mensagem: '',
});

function handleInputChange(event){
    campos[event.target.name] = event.target.value;
    setCampos(campos);
}


   async function handleFormSubmit(event){
        event.preventDefault();
        const email = campos.email
        const nome = campos.nome
        const telefone = campos.telefone
        const empresa = campos.empresa
        const segmento = campos.segmento

        const condition = email === '' || nome === '' || telefone === '' || empresa === '' || segmento === ''
       
        
        try {
            if(EmailValidator.validate(email) === true && condition === false){
                await axios.post('/api/api', {
                    campos
                })
                setSent(true)
                toast.success('Obrigado pelo interesse, em breve entraremos em contato!', {
                    position: "bottom-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark"
                    });
            }else {
                toast.error('Preencha o(s) campo(s) corretamente', {
                    position: "bottom-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark"
                    });
            }
            
        } catch (error) {
            console.log(error)
        }
    
    }


    return (
        
            <Container>

            {!sent ? (
                <Form onSubmit={handleFormSubmit}>
                    
                   
                <div className="information">
                    <Link href="https://goo.gl/maps/NH9ngnasmSPZr7e57">
                    <Card>
                        <img src="/img/contato/address-color.png" alt="icon"/>
                        <span>Rua Caraipe das Águas, 1194 - São Paulo, SP</span>

                    </Card>
                    </Link>
                    
                    <Link href="tel:551120588586">
                    <Card>
                        <img src="/img/contato/phone-color.png" alt="icon"/>
                        <span>+55 11 2058-8586</span>
                    </Card>
                    </Link>

                    <Link href="mailto: interfac@interfac.com.br">
                    <Card>
                        <img src="/img/contato/mail-color.png" alt="icon"/>
                        <span>interfac@interfac.com.br</span>
                    </Card>
                    </Link>

                    <Link href="https://api.whatsapp.com/send?phone=5511976789680&text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20uma%20cota%C3%A7%C3%A3o%20para%20minha%20empresa.">
                    <Card>
                        <img src="/img/contato/whatsapp-color.png" alt="icon"/>
                        <span>+55 11 97678-9680</span>
                    </Card>
                    </Link>
                </div>

                
                <div className="campos">

                <header>
                    <h2>Entre em contato</h2>
                </header>
                <label htmlFor="email">E-mail</label>
                 <input type="text" id="email" name="email" placeholder="Seu e-mail..." onChange={handleInputChange}/>

                 <label htmlFor="telefone">Telefone</label>
                 <input type="text" id="telefone" name="telefone" placeholder="Seu telefone..." onChange={handleInputChange}/>
  
                 <label htmlFor="nome">Nome</label>
                 <input type="text" id="nome" name="nome" placeholder="Seu nome..." onChange={handleInputChange} />

                 <label htmlFor="empresa">Empresa</label>
                 <input type="text" id="empresa" name="empresa" placeholder="Seu empresa..." onChange={handleInputChange} />


                 <span className="segmento">Selecione seu segmento: </span>
                <div className="radio">

                
                 <div className="option">
                 <input type="radio" id="autopecas" name="segmento" value="Autopeças" onChange={handleInputChange}/>
                 <label htmlFor="autopecas">Autopecas</label>
                 </div>
                 
                 <div className="option">
                 <input type="radio" id="industria" name="segmento" value="Centro Automotivo" onChange={handleInputChange}/>
                 <label htmlFor="industria">Centro Automotivo</label>
                </div>
                 
                <div className="option">
                 <input type="radio" id="construcao" name="segmento" value="Material de Construção" onChange={handleInputChange}/>
                 <label htmlFor="construcao">Material de Construção</label>
                </div>

                <div className="option">
                 <input type="radio" id="outro" name="segmento" value="Outros" onChange={handleInputChange}/>
                 <label htmlFor="outro">Outros</label>
                </div>

                </div>
                


  
                 <label htmlFor="mensagem">Mensagem</label>
                 <textarea id="mensagem" name="mensagem" placeholder="Escreva sua mensagem..." className="textArea" onChange={handleInputChange}></textarea>
  
                 <button type="submit" value="Enviar">ENVIAR <img src="/img/icons/right-white.png" alt="enviar"/> </button>
                </div>
                
                 </Form>
            ) : (
                <Section>
                    <h1>Mensagem enviada, agradecemos seu contato!</h1>

                    <span>INterfac • Tecnologia e Informática</span>
                </Section>
            )

            }

    <ToastContainer/>
            </Container>

      
    )
}

