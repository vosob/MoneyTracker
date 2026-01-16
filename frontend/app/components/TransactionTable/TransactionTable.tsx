import { Transaction } from "@/app/page";

interface TransactionTableProps {
  openModal: () => void;
  data: Transaction[];
}

export const TransactionTable = ({
  openModal,
  data,
}: TransactionTableProps) => {
  return (
    <div className="relative bg-gradient-to-b from-[#3B5D63] to-[#355359] rounded-xl px-8 py-4 w-full">
      <table className="w-full table-fixed border-separate border-spacing-y-2 text-sm">
        <thead>
          <tr className="bg-black/30">
            <th className="py-2 px-4 font-semibold text-left rounded-l-xl">
              Date
            </th>
            <th className="py-2 px-4 font-semibold text-left">Type</th>
            <th className="py-2 px-4 font-semibold text-left">Description</th>
            <th className="py-2 px-4 font-semibold text-left rounded-r-xl">
              Amount
            </th>
          </tr>
        </thead>

        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan={4} className="py-8 text-center text-white/60">
                No transactions yet. Add your first transaction!
              </td>
            </tr>
          ) : (
            data.map((item) => (
              <tr key={item.id} className="text-sm hover:bg-white/5">
                <td className="py-2 px-4 text-left">{item.date}</td>
                <td className="py-2 px-4 text-left">{item.type}</td>
                <td className="py-2 px-4 text-left">{item.description}</td>
                <td className="py-2 px-4 text-left">{item.amount}</td>
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
    </div>
  );
};
