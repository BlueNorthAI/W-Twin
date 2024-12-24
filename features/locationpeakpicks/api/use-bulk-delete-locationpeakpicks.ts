import { useMutation, useQueryClient } from "@tanstack/react-query";
import { InferRequestType, InferResponseType } from "hono";
import { toast } from "sonner";

import { client } from "@/lib/hono";

type ResponseType = InferResponseType<typeof client.api.locationpeakpicks["bulk-delete"]["$post"]>;
type RequestType = InferRequestType<typeof client.api.locationpeakpicks["bulk-delete"]["$post"]>["json"];

export const useBulkDeleteLocationPeakpickDetails = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation<
    ResponseType,
    Error,
    RequestType
  >({
    mutationFn: async (json) => {
      const response = await client.api.locationpeakpicks["bulk-delete"]["$post"]({ json });
      return await response.json();
    },
    onSuccess: () => {
      toast.success("LocationPeakpickDetails deleted");
      queryClient.invalidateQueries({ queryKey: ["locationpeakpickdetails"] });
    },
    onError: () => {
      toast.error("Failed to delete locationpeakpickdetails");
    },
  });

  return mutation;
};
