import Modal from "react-modal"
import { Container } from "./styles"

interface newTransactionModalProps {
    isOpen: boolean;
    onRequestCLose: () => void
}

export function NewTransactionModal({isOpen, onRequestCLose}: newTransactionModalProps) {
    return(
        <Modal 
            isOpen={isOpen}
            onRequestClose={onRequestCLose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
        <Container >
            <h2>Cadastrar informação</h2>
            <input placeholder="Título" />
            <input type="number" placeholder="Valor"/>
            <input type="text" placeholder="Categoria"/>
            <button type="submit">Cadastrar</button>
        </Container>

       
      </Modal> 
    )
}