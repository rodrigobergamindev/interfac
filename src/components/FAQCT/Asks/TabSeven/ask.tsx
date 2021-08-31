import {Ask} from './styles'


interface AskProps {
  active: boolean;
}



export function AskArea(props: AskProps) {
   

    return (
        <Ask active={props.active}>
            <ul>
                <li>Sistema INterfac disponibiliza integração com MERCADO LIVRE</li>
                <li>Sincronização automática dos produtos, como valores, quantidade estoque e descrição</li>
                <li>Alerta de vendas</li>
            </ul>
        </Ask>
    )
}

