import { Transaction } from "@/app/page";
import { Button } from "../ui/Button/Button";
import { Input } from "../ui/Input/Input";

interface TransactionFormProps {
  onSubmit: (data: Transaction) => void;
  closeModal: () => void;
}

export const TransactionForm = ({
  onSubmit,
  closeModal,
}: TransactionFormProps) => {
  const handleSubmit = (formData: FormData) => {
    const data: Transaction = {
      amount: formData.get("amount") as string,
      date: formData.get("date") as string,
      description: formData.get("description") as string,
    };

    onSubmit(data);
    closeModal();
  };
  return (
    <form action={handleSubmit}>
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
