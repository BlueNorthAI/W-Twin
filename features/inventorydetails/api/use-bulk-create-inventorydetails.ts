import { useMutation, useQueryClient } from "@tanstack/react-query";
import { InferRequestType, InferResponseType } from "hono";
import { toast } from "sonner";

import { client } from "@/lib/hono";

type ResponseType = InferResponseType<typeof client.api.inventorydetails["bulk-create"]["$post"]>;
type RequestType = InferRequestType<typeof client.api.inventorydetails["bulk-create"]["$post"]>["json"];

export const useBulkCreateInventorydetails = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation<
    ResponseType,
    Error,
    RequestType
  >({
    mutationFn: async (json) => {
      console.log(`bulk create inventorydetails`, json);
      const response = await client.api.inventorydetails["bulk-create"]["$post"]({ json });
      return await response.json();
    },
    onSuccess: () => {
      toast.success("Inventorydetails created");
      queryClient.invalidateQueries({ queryKey: ["inventorydetails"] });
    },
    onError: () => {
      toast.error("Failed to create inventorydetails");
    },
  });

  return mutation;
};
