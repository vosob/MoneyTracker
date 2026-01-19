"use client";

import { Balance } from "./components/Balance/Balance";
import { Header } from "./components/Header/Header";
import { Nav } from "./components/Nav/Nav";
import { TransactionTable } from "./components/TransactionTable/TransactionTable";

import { Modal } from "./components/ui/Modal/Modal";
import { useToggle } from "./hooks/useToggle";

import { TransactionForm } from "./components/TransactionForm/TransactionForm";
import { deleteTransaction, getAllTransactions } from "./api/transaction";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Transaction, TransactionWithoutDate } from "@/types/Transaction";
import { postTransaction } from "./api/transaction";

export default function Home() {
  const [isOpen, openModal, closeModal] = useToggle();

  const queryClient = useQueryClient();

  const { data, error, isLoading } = useQuery<Transaction[]>({
    queryKey: ["transactions"],
    queryFn: getAllTransactions,
  });

  const transactionMutation = useMutation({
    mutationFn: (transactionData: TransactionWithoutDate) =>
      postTransaction(transactionData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["transactions"] });
    },
  });

  const deleteTransactionMutation = useMutation({
    mutationFn: (id: string) => deleteTransaction(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["transactions"] });
    },
  });

  const addTransaction = (newTransaction: TransactionWithoutDate) => {
    transactionMutation.mutate(newTransaction);
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
      {isOpen.isOpen && (
        <Modal onClose={closeModal}>
          <h2 className="text-center font-bold text-3xl mb-10">
            Add transaction
          </h2>

          <TransactionForm closeModal={closeModal} onSubmit={addTransaction} />
        </Modal>
      )}
    </>
  );
}
