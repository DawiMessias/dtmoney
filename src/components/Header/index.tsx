import logoImg from "../../assets/logo.svg"
import { Container } from "./styles"

export function Header() {
    return (
        <Container>
            <img src={logoImg} alt="dtmoney" />
            <button type="button">
                Nova Transação
            </button>
        </Container>
    )
}