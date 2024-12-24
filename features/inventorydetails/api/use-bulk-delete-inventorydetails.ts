import { useMutation, useQueryClient } from "@tanstack/react-query";
import { InferRequestType, InferResponseType } from "hono";
import { toast } from "sonner";

import { client } from "@/lib/hono";

type ResponseType = InferResponseType<typeof client.api.inventorydetails["bulk-delete"]["$post"]>;
type RequestType = InferRequestType<typeof client.api.inventorydetails["bulk-delete"]["$post"]>["json"];

export const useBulkDeleteInventorydetails = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation<
    ResponseType,
    Error,
    RequestType
  >({
    mutationFn: async (json) => {
      const response = await client.api.inventorydetails["bulk-delete"]["$post"]({ json });
      return await response.json();
    },
    onSuccess: () => {
      toast.success("Inventorydetails deleted");
      queryClient.invalidateQueries({ queryKey: ["inventorydetails"] });
    },
    onError: () => {
      toast.error("Failed to delete inventorydetails");
    },
  });

  return mutation;
};
