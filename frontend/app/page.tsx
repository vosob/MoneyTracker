"use client";

import { useState } from "react";
import { Balance } from "./components/Balance/Balance";
import { Header } from "./components/Header/Header";
import { Nav } from "./components/Nav/Nav";
import { TransactionTable } from "./components/TransactionTable/TransactionTable";

export default function Home() {
  const [openModal, setOpenModal] = useState(false);

  const addNewTransaction = () => {
    setOpenModal(true);
    console.log("modal is opened");
  };

  return (
    <div className="bg-gradient-to-b from-[#3B5D63] to-[#355359] min-h-screen">
      <Header />

      <main className="bg-[#293e43] px-6 pt-8 h-screen flex gap-6">
        <div className="flex flex-col gap-6">
          <Nav />
          <Balance />
        </div>

        <TransactionTable addNewTransaction={addNewTransaction} />
      </main>
    </div>
  );
}
