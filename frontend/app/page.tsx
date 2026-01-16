"use client";

import { useState } from "react";
import { Balance } from "./components/Balance/Balance";
import { Header } from "./components/Header/Header";
import { Nav } from "./components/Nav/Nav";
import { TransactionTable } from "./components/TransactionTable/TransactionTable";

import { Modal } from "./components/ui/Modal/Modal";
import { useToggle } from "./hooks/useToggle";
import { FiPlus } from "react-icons/fi";
import { TransactionForm } from "./components/TransactionForm/TransactionForm";
import { getAllTransactions } from "./api/transaction";
import { useQuery } from "@tanstack/react-query";

export interface Transaction {
  id?: string;
  amount: string;
  date: string;
  type: "income" | "expense";
  description: string;
}

export default function Home() {
  const [isOpen, openModal, closeModal] = useToggle();
  const [isIncome, setIsIncome] = useState(true);

  const { data, error, isLoading } = useQuery<Transaction[]>({
    queryKey: ["transactions"],
    queryFn: getAllTransactions,
  });

  console.log(data);

  const addTransaction = (newTransaction: Transaction) => {
    const data = { id: crypto.randomUUID(), ...newTransaction };

    console.log(data);
  };

  if (error) return <p>Some error..</p>;

  return (
    <>
      <div className="bg-gradient-to-b from-[#3B5D63] to-[#355359] min-h-screen">
        <Header />

        <main className="bg-[#293e43] px-6 pt-8 h-screen flex gap-6">
          <div className="flex flex-col gap-6">
            <Nav />
            <Balance />
          </div>

          {data && <TransactionTable data={data} openModal={openModal} />}
        </main>
      </div>
      {isOpen && (
        <Modal onClose={closeModal}>
          <h2 className="text-center font-bold text-3xl mb-10">
            Edit transaction
          </h2>
          {/* <div className="flex justify-center items-center mb-8 gap-5">
            <span>Income</span>
            <div className="relative w-20 h-10 bg-white rounded-full">
              <div className="absolute left-0 top-0 w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-white transition-transform duration-300">
                <FiPlus size={20} />
              </div>
            </div>
            <span>Expense</span>
          </div> */}
          <div className="flex justify-center items-center mb-8 gap-5">
            <span className={`w-12 ${isIncome ? "font-bold" : ""}`}>
              Income
            </span>

            <button
              type="button"
              onClick={() => setIsIncome(!isIncome)}
              className="relative w-20 h-10 bg-white rounded-full"
            >
              <div
                className={`absolute top-0 w-10 h-10 rounded-full flex items-center justify-center text-white transition-all duration-300 ${
                  isIncome ? "left-0 bg-yellow-500" : "left-10 bg-red-800"
                }`}
              >
                <FiPlus size={20} />
              </div>
            </button>
            <span className={`w-12 ${!isIncome ? "font-bold" : ""}`}>
              Expense
            </span>
          </div>
          <TransactionForm closeModal={closeModal} onSubmit={addTransaction} />
        </Modal>
      )}
    </>
  );
}
