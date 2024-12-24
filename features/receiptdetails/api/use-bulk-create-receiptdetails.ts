import { useMutation, useQueryClient } from "@tanstack/react-query";
import { InferRequestType, InferResponseType } from "hono";
import { toast } from "sonner";

import { client } from "@/lib/hono";

type ResponseType = InferResponseType<typeof client.api.receiptdetails["bulk-create"]["$post"]>;
type RequestType = InferRequestType<typeof client.api.receiptdetails["bulk-create"]["$post"]>["json"];

export const useBulkCreateReceiptDetails = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation<
    ResponseType,
    Error,
    RequestType
  >({
    mutationFn: async (json) => {
      console.log(`bulk create receiptdetails`, json);
      const response = await client.api.receiptdetails["bulk-create"]["$post"]({ json });
      return await response.json();
    },
    onSuccess: () => {
      toast.success("ReceiptDetails created");
      queryClient.invalidateQueries({ queryKey: ["receiptdetails"] });
    },
    onError: () => {
      toast.error("Failed to create receiptdetails");
    },
  });

  return mutation;
};
