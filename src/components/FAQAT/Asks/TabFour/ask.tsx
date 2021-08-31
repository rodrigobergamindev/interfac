import {Ask} from './styles'


interface AskProps {
  active: boolean;
}



export function AskArea(props: AskProps) {
   

    return (
        <Ask active={props.active}>
            <ul>
                <li>Através do arquivo XML</li>
                <li>Entrada Manual através da DANFE ou Documento informal</li>
                <li>Documento DANFE, Pedido de compra ou Compra direta</li>
                <li>Conferencia cega utilizando leitor ótico</li>
                <li>Emissão etiqueta de acordo com a quantidade</li>
                <li>Cadastra novos produtos e atualiza ncm</li>
                <li>Atualiza estoque, preços de custo, preço de venda, ncm e histórico de compra no castro de produtos</li>
                <li>Cadastra código do fornecedor no cadastro de produtos</li>
            </ul>
        </Ask>
    )
}

