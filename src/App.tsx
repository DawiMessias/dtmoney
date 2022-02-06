import Modal from "react-modal"
import { useState } from "react";
import { GlobalStyle } from "../src/styles/global";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";

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

      <Modal 
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      >
        <h2>Cadastrar informação</h2>
      </Modal>
      <GlobalStyle />
    </>
  );
}