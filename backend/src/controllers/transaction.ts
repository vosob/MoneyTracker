import { Request, Response } from "express";

const transaction = [
  {
    id: 1,
    date: "2023-08-01",
    type: "income",
    category: "other",
    description: "Salary",
    amount: 5000,
  },
  {
    id: 2,
    date: "2023-08-02",
    type: "expense",
    category: "groceries",
    description: "Milk",
    amount: 2.5,
  },
  {
    id: 3,
    date: "2023-08-03",
    type: "expense",
    category: "entertainment",
    description: "Movie",
    amount: 10,
  },
];

export const getAllTransactions = (req: Request, res: Response) => {
  res.status(200).json({ transactions: transaction });
};
