import { TransactionWithoutDate } from "@/types/Transaction";
import { instance } from "./axiosInstants";

export const getAllTransactions = async () => {
  const res = await instance.get("/transactions");
  return res.data.transactions;
};

export const postTransaction = async (data: TransactionWithoutDate) => {
  const res = await instance.post("/transactions", data);
  return res.data;
};

export const deleteTransaction = async (id: string) => {
  const res = await instance.delete(`/transactions/${id}`);
  return res.data;
};
