import { useMutation, useQueryClient } from "@tanstack/react-query";
import { InferResponseType } from "hono";
import { toast } from "sonner";

import { client } from "@/lib/hono";

type ResponseType = InferResponseType<typeof client.api.receiptdetails[":id"]["$delete"]>;

export const useDeleteReceiptdetail = (id?: string) => {
  const queryClient = useQueryClient();

  const mutation = useMutation<
    ResponseType,
    Error
  >({
    mutationFn: async () => {
      if (!id) throw new Error("ID is required");
      const response = await client.api.receiptdetails[":id"]["$delete"]({ 
        param: { id },
      });
      return await response.json();
    },
    onSuccess: () => {
      toast.success("Receiptdetail deleted");
      queryClient.invalidateQueries({ queryKey: ["receiptdetail", { id }] });
      queryClient.invalidateQueries({ queryKey: ["receiptdetail"] });
    },
    onError: () => {
      toast.error("Failed to delete receiptdetail");
    },
  });

  return mutation;
};
