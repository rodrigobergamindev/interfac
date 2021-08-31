import {Ask} from './styles'


interface AskProps {
  active: boolean;
}



export function AskArea(props: AskProps) {
   

    return (
        <Ask active={props.active}>
            <ul>
                <li>Cadastro de produtos por XML, Planilha Excel e Manual</li>
                <li>Cadastro de código de pesquisa fornecedores, fabricantes, barra, personalizado</li>
                <li>Descrição de aplicação do produto, que pode ser utilizado para pesquisa no momento de criar o pedido de venda</li>
                <li>Classificação por Grupo e/ou Marcas</li>
                <li>Política de desconto</li>
                <li>Múltiplas tabelas de preço</li>
                <li>Opção de concessão de desconto individual</li>
                <li>Vincular produtos similares</li>
                <li>Detalhamento de todas as compras (Nome fornecedor, nota fiscal, data e valor aquisição)</li>
                <li>Posição estoque entrada e saída por ocorrência</li>
                <li>Atualização NCM de acordo com a nota fiscal de entrada</li>
                <li>Parâmetros Fiscais</li>
                <li>Inserção de fotos e arquivo em pdf</li>
                <li>Bloqueio de produtos com preço defasado</li>
            </ul>
        </Ask>
    )
}

