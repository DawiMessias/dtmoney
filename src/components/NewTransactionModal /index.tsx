import { FormEvent, useState } from "react"
import Modal from "react-modal"
import closeImg from "../../assets/close.svg"
import incomeImg from "../../assets/income.svg"
import outComeImg from "../../assets/outcome.svg"
import { api } from "../../services/api"
import { Container, TransactionTypeContainer, RadioBox } from "./styles"

interface newTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void
}

export function NewTransactionModal({isOpen, onRequestClose}: newTransactionModalProps) {
    const [title, setTitle] = useState("")
    const [value, setValue] = useState(0)
    const [category, setCategory] = useState("")
    const [type, setType] = useState("deposit")

    function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault();

       const data = {
            title, value, category, type
       }

       api.post("/transactions", data)
    }

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
            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Cadastrar informação</h2>
                <input
                 placeholder="Título"
                 value={title}
                 onChange={event => setTitle(event.target.value)}
                 />

                <input
                  type="number"
                  placeholder="Valor"
                  value={value}
                  onChange={event => setValue(Number(event.target.value))}
                  />

                <TransactionTypeContainer >
                    <RadioBox 
                        type="button"
                        isActive={type === "deposit"}
                        onClick={() => setType("deposit")}
                        activeColor="green"
                    >
                        <img src={incomeImg} alt="Entrada"/>
                        <span>Entrada</span>
                    </RadioBox>

                    <RadioBox 
                        type="button"
                        isActive={type === "withdraw"}
                        onClick={() => setType("withdraw")}
                        activeColor="red"
                    >
                        <img src={outComeImg} alt="Saída" />
                        <span>Saída</span>
                    </RadioBox>
                </TransactionTypeContainer>

                <input 
                 type="text"
                 placeholder="Categoria"
                 value={category}
                 onChange={event => setCategory(event.target.value)}
                 />
                <button type="submit">Cadastrar</button>
            </Container>
        </Modal> 
    )
}