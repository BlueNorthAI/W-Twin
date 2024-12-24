import { useMutation, useQueryClient } from "@tanstack/react-query";
import { InferRequestType, InferResponseType } from "hono";
import { toast } from "sonner";

import { client } from "@/lib/hono";

type ResponseType = InferResponseType<typeof client.api.dispatchdetails["bulk-delete"]["$post"]>;
type RequestType = InferRequestType<typeof client.api.dispatchdetails["bulk-delete"]["$post"]>["json"];

export const useBulkDeleteDispatchdetails = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation<
    ResponseType,
    Error,
    RequestType
  >({
    mutationFn: async (json) => {
      const response = await client.api.dispatchdetails["bulk-delete"]["$post"]({ json });
      return await response.json();
    },
    onSuccess: () => {
      toast.success("dispatchdetail deleted");
      queryClient.invalidateQueries({ queryKey: ["dispatchdetail"] });
    },
    onError: () => {
      toast.error("Failed to delete dispatchdetail");
    },
  });

  return mutation;
};
