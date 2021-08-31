import {Ask} from './styles'


interface AskProps {
  active: boolean;
}



export function AskArea(props: AskProps) {
   

    return (
        <Ask active={props.active}>
            <ul>
                <li>Pedido ou pedidos emitidos no período, Garantia e Devolução</li>
                <li>Agrega valores dos mesmos itens contidos em diversos pedidos</li>
                <li>Manutenção de valores e itens antes de gerar a nota</li>
                <li>Boleto para diversos pedidos e uma só nota</li>
                <li>Envia e-mail do arquivo XML e boleto</li>
                <li>Carta correção</li>
                <li>Gerar e Emitir por vários terminais</li>
                <li>O Sistema INterfac recomenda o CERTIFICADO A-1.</li>
            </ul>
        </Ask>
    )
}

