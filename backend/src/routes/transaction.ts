import { Router } from "express";
import { getAllTransactions } from "../controllers/transaction";

const router = Router();

router.get("/", getAllTransactions);

export default router;
