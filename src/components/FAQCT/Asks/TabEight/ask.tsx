import {Ask} from './styles'


interface AskProps {
  active: boolean;
}



export function AskArea(props: AskProps) {
   

    return (
        <Ask active={props.active}>
            <ul>
                <li>Emissão de Pedidos</li>
                <li>Recebimento de (Pendencia/Vale/Fatura/Conta Corrente)</li>
                <li>Fechamento de caixa</li>
                <li>Movimentação de caixa interno</li>
                <li>Concessão de desconto</li>
                <li>Concessão de arredondamento</li>
            </ul>
        </Ask>
    )
}

