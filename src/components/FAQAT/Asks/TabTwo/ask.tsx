import {Ask} from './styles'


interface AskProps {
  active: boolean;
}



export function AskArea(props: AskProps) {
   

    return (
        <Ask active={props.active}>
           <ul>
               <li>Cadastro de clientes manual ou via receita federal (necessário certificado digital)</li>
               <li>Cadastro de fornecedores manual ou XML de entrada</li>
               <li>Controle de crédito e condições de faturamento predeterminada</li>
               <li>Vinculação de tabela de preço</li>
               <li>Movimento financeiro: Pedidos, Boletos, Pendencia, Controle de crédito e contravale)</li>
               <li>Desconto na venda ou na quitação dos débitos</li>
               <li>Possibilidade de diversos endereços como: Principal, Secundário, Cobrança e Entrega</li>
               <li>Notificação de emissão de pedidos</li>
               <li>Mensagens personalizadas e log de registros</li>
           </ul>
        </Ask>
    )
}

