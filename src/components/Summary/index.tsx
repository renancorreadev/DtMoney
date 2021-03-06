import { useContext } from 'react'
import { Container } from './styles'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { TransactionsContext } from '../../TransactionContext'

export function Summary() {
  const { transactions } = useContext(TransactionsContext)
  console.log(transactions)

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="entradas" />
        </header>
        <strong>R$ 1000,00</strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas" />
        </header>
        <strong> - R$ 500,00</strong>
      </div>

      <div className="Highlight-Background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="entradas" />
        </header>
        <strong>R$ 500,00</strong>
      </div>
    </Container>
  )
}
