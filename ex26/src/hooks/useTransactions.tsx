import { 
    createContext, 
    ReactNode, 
    useContext, 
    useEffect, 
    useState 
} from 'react';

import { api } from '../services/api';

type TransactionData = {
    id: number;
    title: string;
    category: string;
    amount: number;
    type: string;
    createdAt: string;
}

type TransactionInput = Omit<TransactionData, 'id' | 'createdAt'>;

type TransactionProviderProps = {
    children: ReactNode;
}

type TransactionsContextData = {
    transactions: TransactionData[];
    createTransaction: (transaction: TransactionInput) => void;
}

const TransactionContext = createContext<TransactionsContextData>(
    {} as TransactionsContextData
);

export function TransactionProvider({ children }: TransactionProviderProps){

    const [transactions, setTransactions] = useState<TransactionData[]>([])
    
    useEffect(() => {
        api.get('transactions')
        .then(response => setTransactions(response.data.transactions));
    }, [])

    async function createTransaction(transactionInput: TransactionInput){
        const response = await api.post('/transactions', {
            ...transactionInput,
            createdAt: new Date(),      
        });
        
        const { transaction } = response.data
        setTransactions([...transactions, transaction])
    }

    return(
        <TransactionContext.Provider value={{
            transactions,
            createTransaction
        }}>
            { children }
        </TransactionContext.Provider>
    )
}

export function useTransactions(){
    const context = useContext(TransactionContext);
    return context;
}

