import axios from 'axios';
import {Form} from './styles'
import { useState } from 'react'



export default function FormContato() {


const [sent, setSent] = useState(false)
    
const [campos, setCampos] = useState({
    nome: '',
    email: '',
    mensagem: '',
});

function handleInputChange(event){
    event.preventDefault();
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
                    <span>hey</span>
                </div>
                
                <div className="campos">
                <label htmlFor="email">E-mail</label>
                 <input type="text" id="email" name="email" placeholder="E-mail de destino.." onChange={handleInputChange}/>
  
                 <label htmlFor="nome">Nome</label>
                 <input type="text" id="nome" name="nome" placeholder="Nome da pessoa.." onChange={handleInputChange} />
  
                 <label htmlFor="mensagem">Mensagem</label>
                 <textarea id="mensagem" name="mensagem" placeholder="Escreva algo.." className="textArea" onChange={handleInputChange}></textarea>
  
                 <input type="submit" value="Enviar" />
                </div>
                
                 </Form>
            ) : (
                <h1>Email sent</h1>
            )

            }
            </>

      
    )
}

