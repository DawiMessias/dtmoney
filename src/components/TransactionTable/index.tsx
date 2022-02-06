import { useEffect } from "react";
import { Container } from "./styles";
import { api } from "../../services/api"
export function TransactionTable() {

    useEffect(() => {
        api.get("transactions")
            .then(response => console.log(response.data))
    }, [])

    return(
        <Container>
            <table>
                <tbody>
                    <tr>
                        <th>título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </tbody>

                <tbody>
                    <tr>
                        <td>Desenvolvimento Website</td>
                        <td className="deposit">R$12.00</td>
                        <td>Programação</td>
                        <td>03/02/2022</td>
                    </tr>
                </tbody>

                <tbody>
                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw"> - R$600</td>
                        <td>Despesas da casa</td>
                        <td>03/02/2022</td>
                    </tr>
                </tbody>
            </table>
        </Container>

    )
}