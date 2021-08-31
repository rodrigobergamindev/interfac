import axios from 'axios';
import {Form, Card, Section} from './styles'
import { useState } from 'react'



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

        try {
            await axios.post('/api/api', {
                campos
            })
            setSent(true)
        } catch (error) {
            console.log(error)
        }
    
    }


    return (
        
            <>

            {!sent ? (
                <Form onSubmit={handleFormSubmit}>

                <div className="information">
                    <Card>
                        <img src="/img/contato/address.png" alt="icon"/>
                        <span>Rua Caraipe das Águas, 1194 - São Paulo, SP</span>

                    </Card>

                    <Card>
                        <img src="/img/contato/phone.png" alt="icon"/>
                        <span>+55 11 2058-8586</span>
                    </Card>

                    <Card>
                        <img src="/img/contato/mail.png" alt="icon"/>
                        <span>interfac@interfac.com.br</span>
                    </Card>

                    <Card>
                        <img src="/img/contato/whatsapp.png" alt="icon"/>
                        <span>+55 11 97678-9680</span>
                    </Card>
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
                 <input type="radio" id="industria" name="segmento" value="Indústria" onChange={handleInputChange}/>
                 <label htmlFor="industria">Industria</label>
                </div>
                 
                <div className="option">
                 <input type="radio" id="construcao" name="segmento" value="Construção" onChange={handleInputChange}/>
                 <label htmlFor="construcao">Construção</label>
                </div>

                <div className="option">
                 <input type="radio" id="outro" name="segmento" value="Outro" onChange={handleInputChange}/>
                 <label htmlFor="outro">Outro</label>
                </div>

                </div>
                


  
                 <label htmlFor="mensagem">Mensagem</label>
                 <textarea id="mensagem" name="mensagem" placeholder="Escreva sua mensagem..." className="textArea" onChange={handleInputChange}></textarea>
  
                 <button type="submit" value="Enviar">ENVIAR <img src="/img/icons/right.png" alt="enviar"/> </button>
                </div>
                
                 </Form>
            ) : (
                <Section>
                    <h1>Mensagem enviada, agradecemos seu contato!</h1>

                    <span>INterfac • Tecnologia e Informática</span>
                </Section>
            )

            }
            </>

      
    )
}

