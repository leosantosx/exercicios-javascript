import { GlobalStyle } from "./styles/global";
import { useState } from "react";
import Modal from 'react-modal';

import { Header } from "./components/Header";
import { Dashboard } from './components/Dashboard';
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionProvider } from "./TransactionsContext";

Modal.setAppElement('#root');

export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal(){
      setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal(){
      setIsNewTransactionModalOpen(false);
  }

  return (
    <TransactionProvider>

      <GlobalStyle />
      <Header 
        onOpenNewTransactionModal={handleOpenNewTransactionModal} 
      />

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
        />

      <Dashboard />
    </TransactionProvider>
  );
}
