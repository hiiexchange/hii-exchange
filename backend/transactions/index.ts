import { axios_server } from "..";

export interface Transaction {
  id: number;
  inputToken: string;
  outputToken: string;
  inputAmount: number;
  outputAmount: number;
  createdAt: string;
  isPending: boolean;
  address: string;
}

export async function fetchUserTransactions() {
  const res = await axios_server.get<Array<Transaction>>("/transactions/user");
  return res.data;
}

export async function fetchAllTransactions() {
  const res = await axios_server.get<Array<Transaction>>("/transactions/all");
  return res.data;
}

export const updateTransactionStatus = async (id: number) => {
  const res = await axios_server.patch<unknown>(`/transactions/${id}/confirm`);
  return res.data;
};
