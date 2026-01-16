import { Router } from "express";
import { getCurrency } from "../controllers/getCurrency";

const router = Router();

router.get("/", getCurrency);

export default router;
