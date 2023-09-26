import {
  fetchAllTransactions,
  updateTransactionStatus,
} from "@/backend/transactions";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const UserOrders = ({}) => {
  const queryClient = useQueryClient();

  const { data: transactions, isLoading } = useQuery({
    queryKey: ["all-transactions"],
    queryFn: fetchAllTransactions,
  });

  const mutation = useMutation({
    mutationFn: updateTransactionStatus,
    onSuccess: () => {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      queryClient.invalidateQueries({ queryKey: ["all-transactions"] });
    },
  });

  if (isLoading)
    return (
      <div className="flex w-full justify-center">
        <div className="h-10 w-10 animate-spinner rounded-full border-2 border-t border-hero-bg ease-linear"></div>
      </div>
    );

  return (
    <div className="container mx-auto bg-hero-bg">
      <table className="min-w-full border border-gray-300 bg-white">
        <thead>
          <tr className="text-hero-bg">
            <th className="border-b px-4 py-2">Order ID</th>

            <th className="border-b px-4 py-2">INPUT TOKEN</th>
            <th className="border-b px-4 py-2">OUTPUT TOKEN</th>
            <th className="border-b px-4 py-2">FROM </th>
            <th className="border-b px-4 py-2"> TO</th>
            <th className="border-b px-4 py-2">CREATED AT</th>
            <th className="border-b px-4 py-2">STATUS</th>
            <th className="border-b px-4 py-2"> ACTION</th>
          </tr>
        </thead>
        <tbody>
          {transactions?.map((transaction) => (
            <tr key={transaction.id}>
              <td className="border-b px-4 py-2">{transaction.id}</td>
              <td className="border-b px-4 py-2">{transaction.inputToken}</td>
              <td className="border-b px-4 py-2">{transaction.outputToken}</td>
              <td className="border-b px-4 py-2">{transaction.inputAmount}</td>
              <td className="border-b px-4 py-2">{transaction.outputAmount}</td>
              <td className="border-b px-4 py-2">{transaction.createdAt}</td>
              <td
                className={`border-b px-4 py-2 font-semibold ${
                  transaction.isPending ? "text-yellow-500" : "text-green-500"
                }`}
              >
                {transaction.isPending ? "PENDING" : "APPROVED"}
              </td>
              <td>
                <button
                  type="button"
                  className="rounded-md bg-green-400 px-3 py-2 text-xs"
                  onClick={() => mutation.mutate(transaction.id)}
                >
                  {mutation.isLoading &&
                  mutation.variables === transaction.id ? (
                    <div className="h-6 w-6 animate-spinner rounded-full border border-t border-orange ease-linear"></div>
                  ) : (
                    "APPROVE"
                  )}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserOrders;
