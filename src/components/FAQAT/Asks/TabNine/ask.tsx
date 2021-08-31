import {Ask} from './styles'


interface AskProps {
  active: boolean;
}



export function AskArea(props: AskProps) {
   

    return (
        <Ask active={props.active}>
            <ul>
                <li>Sistema atualizado para atender todas rotinas de emissão Cupom SAT</li>
                <li>Compatível com 99% dos equipamentos existentes no mercado</li>
                <li>Caso em que o cliente não utilize caixa central o Sistema INterfac permite que vários terminais façam impressão do Cupom SAT</li>
            </ul>
        </Ask>
    )
}

