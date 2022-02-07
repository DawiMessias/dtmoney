import Modal from "react-modal"
import { useState } from "react";
import { GlobalStyle } from "../src/styles/global";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal ";

Modal.setAppElement("#root")
export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

  function handleOpenNewTransactionModal() {
      setIsNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal () {
      setIsNewTransactionModalOpen(false)
  }

  return (
    <>
      <Header onOpenTransactionModal={handleOpenNewTransactionModal} />

      <Dashboard />
      
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
         onRequestCLose={handleCloseNewTransactionModal}
      />
     
      <GlobalStyle />
    </>
  );
}