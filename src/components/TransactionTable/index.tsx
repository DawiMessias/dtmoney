import { useContext } from "react";
import { Container } from "./styles";
import { useTransaction } from "../../hooks/UseTransactions"

export function TransactionTable() {
    const { transactions } = useTransaction()
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
                   { transactions.map(transaction => {
                       return (
                        <tr key={transaction.id}>
                            <td>{transaction.title}</td>
                            <td className={transaction.type}>
                                {new Intl.NumberFormat("pt-BR", {
                                    style: "currency",
                                    currency: "BRL"
                                }).format(transaction.amount)}</td>
                            <td>{transaction.category}</td>
                            <td>
                                {new Intl.DateTimeFormat("pt-BR").format(
                                    new Date(transaction.createdAt))}
                            </td>
                        </tr>
                       )
                   })}
                </tbody>
            </table>
        </Container>

    )
}