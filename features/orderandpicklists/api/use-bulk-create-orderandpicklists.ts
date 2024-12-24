import { useMutation, useQueryClient } from "@tanstack/react-query";
import { InferRequestType, InferResponseType } from "hono";
import { toast } from "sonner";

import { client } from "@/lib/hono";

type ResponseType = InferResponseType<typeof client.api.orderandpicklists["bulk-create"]["$post"]>;
type RequestType = InferRequestType<typeof client.api.orderandpicklists["bulk-create"]["$post"]>["json"];

export const useBulkCreateOrderandpicklist = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation<
    ResponseType,
    Error,
    RequestType
  >({
    mutationFn: async (json) => {
      console.log(`bulk create orderandpicklist`, json);
      const response = await client.api.orderandpicklists["bulk-create"]["$post"]({ json });
      return await response.json();
    },
    onSuccess: () => {
      toast.success("Orderandpicklist created");
      queryClient.invalidateQueries({ queryKey: ["orderandpicklists"] });
    },
    onError: () => {
      toast.error("Failed to create orderandpicklist");
    },
  });

  return mutation;
};
