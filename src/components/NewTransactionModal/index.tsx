import Modal from 'react-modal'
import { Container, TransactionTypeContainer } from './styles'
import close from '../../assets/close.svg'
import imcomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'

Modal.setAppElement('#root')
interface NewTransactionModalProps {
  isOpen: boolean
  onRequestClose: () => void
}
export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="submit"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={close} alt="close" />
      </button>
      <Container>
        <h2>Cadastrar transação</h2>
        <input placeholder="Titulo" />

        <input type="number" placeholder="Valor" />

        <TransactionTypeContainer>
          <button>
            <img src={imcomeImg} alt="Entrada" />
            <span>Entrada</span>
          </button>
        </TransactionTypeContainer>

        <TransactionTypeContainer>
          <button>
            <img src={outcomeImg} alt="Saida" />
            <span>Saida</span>
          </button>
        </TransactionTypeContainer>

        <input placeholder="Categoria" />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  )
}
