import {Ask} from './styles'


interface AskProps {
  active: boolean;
}



export function AskArea(props: AskProps) {
   

    return (
        <Ask active={props.active}>
            <ul>
                <li>Controle de veículo pela placa</li>
                <li>Controle de serviços anteriores através dos pedidos emitidos</li>
                <li>Permite manutenção do pedido inserindo novos produtos e serviços</li>
                <li>Bloqueia exclusão de itens já inseridos no pedido</li>
                <li>Permite que diversos colaboradores participem do pedido</li>
                <li>Permite seleção do lado da peça aplicada e vincula colaborador</li>
                <li>Relatório analítico e sintético de comissão</li>
                <li>Relatório dos veículos relacionados a comissão</li>
                <li>Permite não serviços não autorizados</li>
                <li>Permite mensagens no item</li>
            </ul>
           
        </Ask>
    )
}

