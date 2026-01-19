import { Transaction } from "@/types/Transaction";
import { HiOutlinePencil } from "react-icons/hi";
import { format } from "date-fns";
import { Modal } from "../ui/Modal/Modal";

import { DeleteContentModal } from "../DeleteContentModal/DeleteContentModal";
import { useToggle } from "@/app/hooks/useToggle";

interface TransactionTableProps {
  openModal: () => void;
  data: Transaction[];
}

export const TransactionTable = ({
  openModal,
  data,
}: TransactionTableProps) => {
  const [deleteModal, openDeleteModal, closeDeleteModal] =
    useToggle<Transaction>();
  return (
    <div className="relative bg-gradient-to-b from-[#3B5D63] to-[#355359] rounded-xl px-8 py-4 w-full">
      <table className="w-full table-fixed border-separate border-spacing-y-2 text-sm">
        <colgroup>
          <col />
          <col />
          <col />
          <col />
          <col className="w-35" />
          <col className="w-35" />
        </colgroup>

        <thead>
          <tr className="text-xl">
            <th className="py-4 px-4 font-semibold text-left rounded-l-xl">
              Date
            </th>
            <th className="py-4 px-4 font-semibold text-left">Type</th>
            <th className="py-4 px-4 font-semibold text-left">Category</th>
            <th className="py-4 px-4 font-semibold text-left">Description</th>
            <th className="py-4 px-4 font-semibold text-left rounded-r-xl">
              Amount
            </th>
          </tr>
        </thead>

        <tbody>
          {data.length === 0 ? (
            <tr>
              <td
                colSpan={4}
                className="py-8  text-center bg-gradient-to-b from-[#3B5D63] to-[#355359]"
              >
                No transactions yet. Add your first transaction!
              </td>
            </tr>
          ) : (
            data.map((item) => (
              <tr
                key={item.id}
                className={`text-sm mb-4 ${item.type === "income" ? "bg-gradient-to-b from-[#294045] to-[#1E2F33]" : ""}`}
              >
                <td className="py-4 px-4 text-left rounded-l-2xl">
                  {format(new Date(item.createdAt), "dd.MM.yyyy")}
                </td>
                <td className="py-4 px-4 text-left capitalize">{item.type}</td>
                <td className="py-4 px-4 text-left capitalize">
                  {item.category || "income"}
                </td>
                <td className="py-4 px-4 text-left">{item.description}</td>
                <td className="py-4 px-4 text-left">{item.amount}</td>
                <td className="py-4 px-4 text-right">
                  <button>
                    <HiOutlinePencil />
                  </button>
                </td>

                <td className="py-4 px-4 rounded-r-2xl">
                  <button
                    onClick={() => openDeleteModal(item)}
                    className="cursor-pointer text-white border border-white py-2 px-4 rounded-2xl"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      <button
        onClick={openModal}
        className="absolute right-6 bottom-6 size-14 bg-green-200 rounded-full flex items-center justify-center text-[var(--main-dark)] cursor-pointer hover:bg-green-300 transition-colors"
      >
        <span className="text-5xl -translate-y-1">+</span>
      </button>
      {deleteModal.isOpen && (
        <Modal onClose={closeDeleteModal}>
          <DeleteContentModal
            id={deleteModal.payload?.id}
            closeModal={closeDeleteModal}
          />
        </Modal>
      )}
    </div>
  );
};
