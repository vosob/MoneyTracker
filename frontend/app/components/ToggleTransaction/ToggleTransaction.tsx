import { FiPlus } from "react-icons/fi";

interface ToggleTransactionProps {
  isIncome: boolean;
  setIsIncome: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ToggleTransaction = ({
  isIncome,
  setIsIncome,
}: ToggleTransactionProps) => {
  return (
    <div className="flex justify-center items-center mb-8 gap-5">
      <span className={`w-12 ${isIncome ? "font-bold" : ""}`}>Income</span>

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
      <span className={`w-12 ${!isIncome ? "font-bold" : ""}`}>Expense</span>
    </div>
  );
};
