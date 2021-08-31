import {Ask} from './styles'


interface AskProps {
  active: boolean;
}



export function AskArea(props: AskProps) {
   

    return (
        <Ask active={props.active}>
            <ul>
                <li>Contas à Receber: Pendencia /Vale /Faturado /Conta cliente, Boletos Cartões crédito e débito, boleto bancário.</li>
                <li>Contas à Pagar: Cadastro manual ou xml de entrada e contravale</li>
            </ul>
        </Ask>
    )
}

