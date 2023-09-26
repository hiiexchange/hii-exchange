import { updateTransactionStatus } from "@/backend/transactions";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "../ui/button";

const ActionButton = ({ id }: { id: number }) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: updateTransactionStatus,
    onSuccess: () => {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      queryClient.invalidateQueries({ queryKey: ["all-transactions"] });
    },
  });

  return (
    <Button
      variant="ghost"
      className="bg-green-500 hover:bg-green-600"
      onClick={() => mutation.mutate(id)}
    >
      {mutation.isLoading ? (
        <div className="h-6 w-6 animate-spinner rounded-full border border-t border-t-slate-800 ease-linear"></div>
      ) : (
        "Approve"
      )}
    </Button>
  );
};

export default ActionButton;
