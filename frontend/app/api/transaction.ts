import { instance } from "./axiosInstans";

export const getAllTransactions = async () => {
  const res = await instance.get("/transactions");
  return res.data.transactions;
};
