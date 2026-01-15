import axios from "axios";

export const getCurrency = async () => {
  const res = await axios.get("https://api.monobank.ua/bank/currency");

  return res.data;
};
