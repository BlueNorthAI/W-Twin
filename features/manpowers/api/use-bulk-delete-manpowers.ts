import { useMutation, useQueryClient } from "@tanstack/react-query";
import { InferRequestType, InferResponseType } from "hono";
import { toast } from "sonner";

import { client } from "@/lib/hono";

type ResponseType = InferResponseType<typeof client.api.manpowers["bulk-delete"]["$post"]>;
type RequestType = InferRequestType<typeof client.api.manpowers["bulk-delete"]["$post"]>["json"];

export const useBulkDeleteManpower = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation<
    ResponseType,
    Error,
    RequestType
  >({
    mutationFn: async (json) => {
      const response = await client.api.manpowers["bulk-delete"]["$post"]({ json });
      return await response.json();
    },
    onSuccess: () => {
      toast.success("Manpower deleted");
      queryClient.invalidateQueries({ queryKey: ["manpower"] });
    },
    onError: () => {
      toast.error("Failed to delete manpower");
    },
  });

  return mutation;
};
