import { Router } from "express";
import { Request, Response } from "express";
import transactionRouter from "./transaction";
import { getCurrency } from "../controllers/getCurrency";

const router = Router();

router.use("/transactions", transactionRouter);
router.use("/currency", getCurrency);

router.all(/.*/, (req: Request, res: Response) =>
  res.status(404).json({ error: "Not found" }),
);

export default router;
