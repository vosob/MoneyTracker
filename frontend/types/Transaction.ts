export enum TransactionCategory {
  MAIN = "main expense",
  PRODUCTS = "products",
  CAR = "car",
  SELF_CARE = "self care",
  CHILD_CARE = "child care",
  HOUSEHOLD = "household products",
  EDUCATION = "education",
  LEISURE = "leisure",
}

export interface Transaction {
  id?: string;

  type: "income" | "expense";
  category?: TransactionCategory | null;
  description: string;
  amount: number;

  createdAt: string;
}

export type TransactionWithoutDate = Omit<Transaction, "createdAt" | "id">;
