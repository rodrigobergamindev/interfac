import {Ask} from './styles'


interface AskProps {
  active: boolean;
}



export function AskArea(props: AskProps) {
   

    return (
        <Ask active={props.active}>
            <ul>
                <li>Consulta de produtos por: código do fabricante, fornecedor, de barra, personalizado e por aplicação</li>
                <li>Emissão de Pedidos</li>
                <li>Notificação via e-mail no momento da emissão do pedido</li>
                <li>Emissão de orçamento por e-mail</li>
                <li>Consulta lucro no pedido na somatória dos itens</li>
                <li>Alerta de vendas</li>
            </ul>
        </Ask>
    )
}

