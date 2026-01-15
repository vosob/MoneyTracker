interface TransactionTableProps {
  addNewTransaction: () => void;
}

export const TransactionTable = ({
  addNewTransaction,
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
            <th className="py-2 px-4 font-semibold text-left">Category</th>
            <th className="py-2 px-4 font-semibold text-left">Comment</th>
            <th className="py-2 px-4 font-semibold text-left rounded-r-xl">
              Sum
            </th>
          </tr>
        </thead>

        <tbody>
          <tr className="text-sm">
            <td className="py-2 px-4 text-left">04.01.23</td>
            <td className="py-2 px-4 text-left">+</td>
            <td className="py-2 px-4 text-left">Gift for your wife</td>
            <td className="py-2 px-4 text-left">399</td>
            <td className="py-2 px-4 text-left">Other</td>
          </tr>
        </tbody>
      </table>

      <button
        onClick={addNewTransaction}
        className="absolute right-6 bottom-6 size-14 bg-green-200 rounded-full flex items-center justify-center text-[var(--main-dark)] cursor-pointer"
      >
        <span className="text-5xl -translate-y-1">+</span>
      </button>
    </div>
  );
};
