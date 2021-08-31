import {Ask} from './styles'


interface AskProps {
  active: boolean;
}



export function AskArea(props: AskProps) {
   

    return (
        <Ask active={props.active}>
            <ul>
                <li>Consulta de produtos por: código do fabricante, fornecedor, de barra, personalizado e por aplicação</li>
                <li>Multiplicação de itens</li>
                <li>Agrega itens a pedido formulado no balcão e agrega vários pedidos formulado no balcão</li>
                <li>Concede desconto ou arredondamento (conforme critério em senha)</li>
                <li>Permite a identificação de vendedor</li>
                <li>Permite venda direta e recebimento direto com vendedor</li>
            </ul>
        </Ask>
    )
}

