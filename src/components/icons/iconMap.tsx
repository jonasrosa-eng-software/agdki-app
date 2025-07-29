import { AgendaIcon } from './agenda'
import { CadastroIcon } from './cadastro'
import { ConfigIcon } from './config'
import { EscolaIcon } from './escola'
import { EstoqueIcon } from './estoque'
import { FinanceiroIcon } from './financeiro'
import { FuncionarioIcon } from './Funcionarios'
import { RelatorioIcon } from './relatorio'
import { ReservaIcon } from './reserva'
import { SupportIcon } from './support'

const iconMap = {
  agenda: <AgendaIcon color="#006FEE" height={30} width={30} />,
  cadastro: <CadastroIcon color="#006FEE" />,
  congfig: <ConfigIcon color="#006FEE" />,
  financeiro: <FinanceiroIcon color="#006FEE" />,
  escolinha: <EscolaIcon color="#006FEE" />,
  relatorio: <RelatorioIcon color="#006FEE" />,
  estoque: <EstoqueIcon color="#006FEE" />,
  support: <SupportIcon color="#006FEE" />,
  funcionarios: <FuncionarioIcon color="#006FEE" />,
  reserva: <ReservaIcon color="#006FEE" />,
  none: null,
}

export { iconMap }
