import { useMutation, useQueryClient } from "@tanstack/react-query";
import { InferRequestType, InferResponseType } from "hono";
import { toast } from "sonner";

import { client } from "@/lib/hono";

type ResponseType = InferResponseType<typeof client.api.manpowers["bulk-create"]["$post"]>;
type RequestType = InferRequestType<typeof client.api.manpowers["bulk-create"]["$post"]>["json"];

export const useBulkCreateManpower = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation<
    ResponseType,
    Error,
    RequestType
  >({
    mutationFn: async (json) => {
      console.log(`bulk create manpower`, json);
      const response = await client.api.manpowers["bulk-create"]["$post"]({ json });
      return await response.json();
    },
    onSuccess: () => {
      toast.success("Manpower created");
      queryClient.invalidateQueries({ queryKey: ["manpower"] });
    },
    onError: () => {
      toast.error("Failed to create manpower");
    },
  });

  return mutation;
};
