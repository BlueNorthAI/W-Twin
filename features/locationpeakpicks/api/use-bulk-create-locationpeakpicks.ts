import { useMutation, useQueryClient } from "@tanstack/react-query";
import { InferRequestType, InferResponseType } from "hono";
import { toast } from "sonner";

import { client } from "@/lib/hono";

type ResponseType = InferResponseType<typeof client.api.locationpeakpicks["bulk-create"]["$post"]>;
type RequestType = InferRequestType<typeof client.api.locationpeakpicks["bulk-create"]["$post"]>["json"];

export const useBulkCreateLocationPeakpickDetails = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation<
    ResponseType,
    Error,
    RequestType
  >({
    mutationFn: async (json) => {
      console.log(`bulk create locationpeakpickdetails`, json);
      const response = await client.api.locationpeakpicks["bulk-create"]["$post"]({ json });
      return await response.json();
    },
    onSuccess: () => {
      toast.success("LocationPeakpickDetails created");
      queryClient.invalidateQueries({ queryKey: ["locationpeakpickdetails"] });
    },
    onError: () => {
      toast.error("Failed to create locationpeakpickdetails");
    },
  });

  return mutation;
};
