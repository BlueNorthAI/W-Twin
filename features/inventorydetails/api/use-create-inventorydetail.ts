import { useMutation, useQueryClient } from "@tanstack/react-query";
import { InferRequestType, InferResponseType } from "hono";
import { toast } from "sonner";

import { client } from "@/lib/hono";

type ResponseType = InferResponseType<typeof client.api.inventorydetails.$post>;
type RequestType = InferRequestType<typeof client.api.inventorydetails.$post>["json"];

export const useCreateInventorydetail = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation<
    ResponseType,
    Error,
    RequestType
  >({
    mutationFn: async (json) => {
      const response = await client.api.inventorydetails.$post({ json });
      return await response.json();
    },
    onSuccess: () => {
      toast.success("Inventorydetail created");
      queryClient.invalidateQueries({ queryKey: ["inventorydetails"] });
    },
    onError: () => {
      toast.error("Failed to create inventorydetail");
    },
  });

  return mutation;
};
