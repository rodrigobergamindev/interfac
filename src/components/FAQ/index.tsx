import {Container, ContainerAsks} from './styles'
import {TabEstoque} from './Asks/Estoque/index'
import {TabPesquisa} from './Asks/Pesquisa/index'
import {TabImportacao} from './Asks/Importacao/index'
import {TabVendas} from './Asks/Vendas/index'
import {TabCotacao} from './Asks/Cotacao/index'
import { TabNfe } from './Asks/NFE'
import { TabSuporte } from './Asks/Suporte'
import { TabMetas } from './Asks/Metas'

export function Faq() {



    return (
        <Container>

                <div className="title">

                <h2>Funcionalidades</h2>

                </div>
            
    

            <ContainerAsks>

            
                <TabEstoque/>
                <TabPesquisa/>
                <TabImportacao/>
                <TabVendas/>
                <TabCotacao/>
                <TabNfe/>
                <TabSuporte/>
                <TabMetas/>
            </ContainerAsks>
        </Container>
    )
}

