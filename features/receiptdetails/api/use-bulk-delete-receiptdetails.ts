import { useMutation, useQueryClient } from "@tanstack/react-query";
import { InferRequestType, InferResponseType } from "hono";
import { toast } from "sonner";

import { client } from "@/lib/hono";

type ResponseType = InferResponseType<typeof client.api.receiptdetails["bulk-delete"]["$post"]>;
type RequestType = InferRequestType<typeof client.api.receiptdetails["bulk-delete"]["$post"]>["json"];

export const useBulkDeletereceiptdetails = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation<
    ResponseType,
    Error,
    RequestType
  >({
    mutationFn: async (json) => {
      const response = await client.api.receiptdetails["bulk-delete"]["$post"]({ json });
      return await response.json();
    },
    onSuccess: () => {
      toast.success("receiptdetails deleted");
      queryClient.invalidateQueries({ queryKey: ["receiptdetails"] });
    },
    onError: () => {
      toast.error("Failed to delete receiptdetails");
    },
  });

  return mutation;
};
