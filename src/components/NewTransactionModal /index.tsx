import { useState } from "react"
import Modal from "react-modal"
import closeImg from "../../assets/close.svg"
import incomeImg from "../../assets/income.svg"
import outComeImg from "../../assets/outcome.svg"
import { Container, TransactionTypeContainer, RadioBox } from "./styles"

interface newTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void
}

export function NewTransactionModal({isOpen, onRequestClose}: newTransactionModalProps) {
    const [type, setType] = useState("deposit")
    return(
        <Modal 
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >

            <button type="button"
             onClick={onRequestClose}
              className="react-modal-close">
                <img src={closeImg} alt="fechar modal" />
            </button>
            <Container >
                <h2>Cadastrar informação</h2>
                <input placeholder="Título" />

                <input type="number" placeholder="Valor"/>

                <TransactionTypeContainer >
                    <RadioBox 
                        type="button"
                        isActive={type === "deposit"}
                        onClick={() => setType("deposit")}
                    >
                        <img src={incomeImg} alt="Entrada"/>
                        <span>Entrada</span>
                    </RadioBox>

                    <RadioBox 
                        type="button"
                        isActive={type === "deposit"}
                        onClick={() => setType("withdraw")
                    }>
                        <img src={outComeImg} alt="Saída" />
                        <span>Saída</span>
                    </RadioBox>
                </TransactionTypeContainer>

                <input type="text" placeholder="Categoria"/>

                <button type="submit">Cadastrar</button>
            </Container>

       
        </Modal> 
    )
}