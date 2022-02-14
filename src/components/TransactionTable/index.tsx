import { useContext, useEffect, useState } from "react";
import { Container } from "./styles";
import { api } from "../../services/api"
import { TransactionContext } from "../../TransactionsContext";

interface Transaction{
    id: number,
    title: string,
    amount: number,
    type: string,
    category: string,
    createdAt: string
}

export function TransactionTable() {
    const data = useContext(TransactionContext)
    const [transactions, setTransactions] = useState<Transaction[]>([])

    useEffect(() => {
        api.get("transactions")
            .then(response => setTransactions(response.data.transactions))
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