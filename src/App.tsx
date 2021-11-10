import { GlobalStyle } from './styles/global'
import { Header } from './components/Header'
import { Dashboard } from './components/Dashboard'
import { useState } from 'react'
import { NewTransactionModal } from './components/NewTransactionModal'

export function App() {
  const [isNewTransactionOpen, setIsNewTransactionOpen] = useState(false)

  //handle - sempre quando o usuario vai clicar em algo
  function handleOpenNewTransactionModal() {
    setIsNewTransactionOpen(true)
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionOpen(false)
  }
  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />

      <NewTransactionModal
        isOpen={isNewTransactionOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyle />
    </>
  )
}
