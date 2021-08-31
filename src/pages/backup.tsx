import FormContato from '../components/Contato'
import {Container, Header, Description} from '../styles/styles.servicos'



export default function Backup() {



    return (
        <Container>
           
            <Header>
                <div>
                <h1>BACULA</h1>

                </div>
            </Header>
        

        <Description>
            <header>
                <div></div>

                <h1>SERVIDOR DE BACKUP BACULA</h1>
            </header>

            <article>
            
                <h2>Funcionalidades</h2>

                <ul>
                    <li>Geração de formato aberto (não proprietário) de gravação (pode ser lido pelo tar e dump do Unix) – adeus ao aprisionamento tecnológico</li>
                    <li>Armazenamento do seu catálogo em banco de dados padrão SQL: PostgreSQL ou MySQL</li>
                    <li>Suporte a compressão dos backups nos algoritmos livres GZIP e LZO</li>
                    <li>GPL – sem custos com licenças, conhecimento e possibilidade de customização da ferramenta na versão community</li>
                </ul>

                <h2>Características</h2>

                    <ul>
                        <li>Estrutura cliente/controlador dos backups/storage independentes</li>
                        <li>Gerência (operação, configuração e monitoração) centralizada por meio de interface gráfica web multiusuário</li>
                        <li>Console texto de administração, para fins de contingência</li>
                        <li>Autenticação dos serviços de backup através de senha e de chave criptográfica</li>
                        <li>Armazenamento dos backups em dispositivos de disco e fitas magnéticas</li>
                        <li>Funcionalidade nativa de limite de tráfego de rede para os backups</li>
                        <li>Desduplicação por máquina, de arquivos backupeados</li>
                        <li>Backup tipo cópia / migração</li>
                        <li>Inúmeros canais de suportes pela comunidade (mailing lists, forums, IRC channel, etc.)</li>
                        <li>Farta documentação disponível na Internet</li>
                        <li>Portabilidade (módulos para diferentes sistemas operacionais – Windows, Linux, MAC, etc. – são compatíveis</li>
                        <li>Infinidade de recursos para a customização de backups</li>
                        <li>Funcionalidade que permite a execução de scripts (ou executáveis) antes/depois do início de jobs (backup/restore), tanto no cliente quanto servidor Bacula</li>
                        <li>Operação via linha de comando ou GUI (inclusive, com diferentes interfaces web desenvolvidas pelas comunidades</li>
                        <li>Suporte a maioria dos dispositivos de storage do mercado (inclusive mídias ópticas)</li>
                        <li>Funcionalidade para o envio de mensagens de log dos trabalhos de backup/restore ou ainda instruções para o operador de backup (diferentes perfis)</li>
                        <li>100% compatível com o esquema GFS.</li>
                        
                    </ul>
            
            
             
            </article>
        </Description>

        
        <FormContato/>


        </Container>
    )
}

