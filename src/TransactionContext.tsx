import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from './services/api'

type TransactionInput = Omit<Transation, 'id' | 'createdAt'>

interface Transation {
  id: number
  title: string
  amount: number
  type: string
  category: string
  createdAt: string
}

interface TransactionProviderProps {
  children: ReactNode
  //ReactNode = aceita qualquer tipo de elemento
}

interface TransactionsContextData {
  transactions: Transation[]
  createTransaction: (transation: TransactionInput) => Promise<void>
}
//---------------- functions ---------------------------
export const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData,
)

export function TransactionProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transation[]>([])

  useEffect(() => {
    api
      .get('transactions')
      .then((response) => setTransactions(response.data.transactions))
  }, [])

  async function createTransaction(transaction: TransactionInput) {
    await api.post('/transactions', transaction)
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  )
}
