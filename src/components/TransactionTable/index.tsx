import { Container } from "./styles";

export function TransactionTable() {
    return(
        <Container>
            <table>
                <tr>
                    <th>título</th>
                    <th>Valor</th>
                    <th>Categoria</th>
                    <th>Data</th>
                </tr>

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