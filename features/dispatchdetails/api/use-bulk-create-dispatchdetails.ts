import { useMutation, useQueryClient } from "@tanstack/react-query";
import { InferRequestType, InferResponseType } from "hono";
import { toast } from "sonner";

import { client } from "@/lib/hono";

type ResponseType = InferResponseType<typeof client.api.dispatchdetails["bulk-create"]["$post"]>;
type RequestType = InferRequestType<typeof client.api.dispatchdetails["bulk-create"]["$post"]>["json"];

export const useBulkCreateDispatchdetails = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation<
    ResponseType,
    Error,
    RequestType
  >({
    mutationFn: async (json) => {
      console.log(`bulk create dispatchdetails`, json);
      const response = await client.api.dispatchdetails["bulk-create"]["$post"]({ json });
      return await response.json();
    },
    onSuccess: () => {
      toast.success("dispatchdetails created");
      queryClient.invalidateQueries({ queryKey: ["dispatchdetail"] });
    },
    onError: () => {
      toast.error("Failed to create dispatchdetails");
    },
  });

  return mutation;
};
