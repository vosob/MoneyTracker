import { Router } from "express";
import {
  addTransaction,
  getAllTransactions,
  deleteTransaction,
} from "../controllers/transaction/transaction";

const router = Router();

router.get("/", getAllTransactions);
router.post("/", addTransaction);
router.delete("/:id", deleteTransaction);

export default router;
