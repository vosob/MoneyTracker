import {
  TransactionCategory,
  TransactionWithoutDate,
} from "@/types/Transaction";
import { Button } from "../ui/Button/Button";
import { Input } from "../ui/Input/Input";
import { ToggleTransaction } from "../ToggleTransaction/ToggleTransaction";
import { useState } from "react";

interface TransactionFormProps {
  onSubmit: (data: TransactionWithoutDate) => void;
  closeModal: () => void;
}

export const TransactionForm = ({
  onSubmit,
  closeModal,
}: TransactionFormProps) => {
  const [isIncome, setIsIncome] = useState(true);

  const handleSubmit = (formData: FormData) => {
    const categoryRaw = formData.get("category");
    const data: TransactionWithoutDate = {
      amount: Number(formData.get("amount")) as number,
      description: formData.get("description") as string,
      type: isIncome ? "income" : "expense",
      category:
        !isIncome && typeof categoryRaw === "string"
          ? (categoryRaw as TransactionCategory)
          : undefined,
    };

    onSubmit(data);
    closeModal();
  };
  return (
    <form action={handleSubmit}>
      <ToggleTransaction isIncome={isIncome} setIsIncome={setIsIncome} />

      {!isIncome && (
        <select
          className="mb-9 w-full border border-[#2a3d43] rounded-md px-4 py-3 outline-none cursor-pointer capitalize"
          name="category"
        >
          {[...Object.values(TransactionCategory)].map((category) => (
            <option value={category} key={category}>
              {category}
            </option>
          ))}
        </select>
      )}

      <div className="flex gap-6 mb-9">
        <Input placeholder="8000.00" type="number" name="amount" />
        <Input type="date" name="date" />
      </div>
      <Input
        placeholder="January bonus"
        className="mb-9"
        type="text"
        name="description"
      />
      <div className="flex flex-col">
        <Button className="mb-6">Save</Button>
        <Button variant="clear">Cancel</Button>
      </div>
    </form>
  );
};
