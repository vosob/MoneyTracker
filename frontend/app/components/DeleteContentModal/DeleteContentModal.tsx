import { deleteTransaction } from "@/app/api/transaction";
import { Logo } from "../Logo/Logo";
import { Button } from "../ui/Button/Button";

interface DeleteContentModalProps {
  closeModal: () => void;
  id?: string;
}

export const DeleteContentModal = ({
  closeModal,
  id,
}: DeleteContentModalProps) => {
  const handleDelete = () => {
    deleteTransaction(id!);
    closeModal();
  };

  return (
    <div>
      <div className="mb-10">
        <Logo />
      </div>
      <p className="mb-6 text-center">Are you sure you want to Delete?</p>
      <div className="flex flex-col gap-5">
        <Button onClick={handleDelete} variant="red">
          Delete
        </Button>
        <Button onClick={closeModal} variant="clear">
          Cancel
        </Button>
      </div>
    </div>
  );
};
