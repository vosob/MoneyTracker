import { Request, Response } from "express";
import { prisma } from "../../../lib/prisma";
import { deleteTransactionDto } from "./transaction.dto";

export const getAllTransactions = async (req: Request, res: Response) => {
  const result = await prisma.transaction.findMany({});

  return res.json({ transactions: result });
};

export const addTransaction = async (req: Request, res: Response) => {
  const { amount, description, type, category } = req.body;

  const result = await prisma.transaction.create({
    data: {
      amount,
      description,
      type,
      category: category || null,
    },
  });

  return res.status(201).json(result);
};

export const deleteTransaction = async (req: Request, res: Response) => {
  const parsed = deleteTransactionDto.safeParse(req.params);

  if (!parsed.success) {
    return res.status(400).json({
      error: "Invalid params",
      details: parsed.error.format(),
    });
  }

  const { id } = parsed.data;

  const result = await prisma.transaction.delete({
    where: {
      id,
    },
  });

  return res.json(result);
};
