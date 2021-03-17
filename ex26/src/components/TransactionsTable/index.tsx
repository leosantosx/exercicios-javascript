import { useEffect, useState } from "react";
import { Container } from "./styles";

import { api } from '../../services/api'

type TransactionData = {
    id: number;
    title: string;
    category: string;
    amount: number;
    type: string;
    createdAt: string;
}

export function TransactionsTable(){

    const [transactions, setTransactions] = useState<TransactionData[]>([])

    useEffect(() => {
        api.get('transactions')
        .then(response => setTransactions(response.data));
    }, [])

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Preço</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map(transaction => (
                        <tr key={transaction.id}>
                            <td>{transaction.title}</td>
                            <td className={transaction.type}>R$ {transaction.amount}</td>
                            <td>{transaction.category}</td>
                            <td>{transaction.createdAt}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Container>
    )
}