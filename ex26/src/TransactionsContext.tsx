import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from './services/api';

type TransactionData = {
    id: number;
    title: string;
    category: string;
    amount: number;
    type: string;
    createdAt: string;
}

type TransactionProviderProps = {
    children: ReactNode;
}

export const TransactionContext = createContext<TransactionData[]>([]);

export function TransactionProvider({ children }: TransactionProviderProps){

    const [transactions, setTransactions] = useState<TransactionData[]>([])
    
    useEffect(() => {
        api.get('transactions')
        .then(response => setTransactions(response.data.transactions));
    }, [])

    return(
        <TransactionContext.Provider value={transactions}>
            { children }
        </TransactionContext.Provider>
    )
}

