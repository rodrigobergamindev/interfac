import {Ask} from './styles'


interface AskProps {
  active: boolean;
}



export function AskArea(props: AskProps) {
   

    return (
        <Ask active={props.active}>
           <ul>
               <li>Compatível com impressoras Zebra e Argox OS 214 </li>
               <li>Desenvolvemos etiquetas conforme a necessidade do cliente</li>
               <li>Solicitamos que consulte nosso suporte técnico para orientação na aquisição tanto da impressora e etiquetas</li>
           </ul>
        </Ask>
    )
}

