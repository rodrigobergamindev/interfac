import {Ask} from './styles'


interface AskProps {
  active: boolean;
}



export function AskArea(props: AskProps) {
   

    return (
        <Ask active={props.active}>
            <ul>
                <li>Cadastro de Colaboradores</li>
                <li>Cadastro de comissão Produtos e Serviços</li>
                <li>Controle de acesso por senha</li>
                <li>Meta individual de venda com indicativo em percentual na tela de vendas</li>
                <li>Metas da Empresa com comparativo entre funcionários</li>
            </ul>
        </Ask>
    )
}

