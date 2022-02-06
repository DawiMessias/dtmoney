import logoImg from "../../assets/logo.svg"
import { Container, Content } from "./styles"

interface HeaderPropos {
    onOpenTransactionModal: () => void;
}

export function Header({onOpenTransactionModal}: HeaderPropos) {
    return (
        <Container>
            <Content>
            <img src={logoImg} alt="dtmoney" />
            <button type="button" onClick={onOpenTransactionModal}>
                Nova Transação
            </button>

            </Content>
        </Container>
    )
}