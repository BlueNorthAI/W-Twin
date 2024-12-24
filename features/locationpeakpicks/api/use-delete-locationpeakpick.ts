import { useMutation, useQueryClient } from "@tanstack/react-query";
import { InferResponseType } from "hono";
import { toast } from "sonner";

import { client } from "@/lib/hono";

type ResponseType = InferResponseType<typeof client.api.locationpeakpicks[":id"]["$delete"]>;

export const useDeleteLocationPeakpickDetails = (id?: string) => {
  const queryClient = useQueryClient();

  const mutation = useMutation<
    ResponseType,
    Error
  >({
    mutationFn: async () => {
      if (!id) throw new Error("ID is required");
      const response = await client.api.locationpeakpicks[":id"]["$delete"]({ 
        param: { id },
      });
      return await response.json();
    },
    onSuccess: () => {
      toast.success("LocationPeakpickDetails deleted");
      queryClient.invalidateQueries({ queryKey: ["locationpeakpickdetails", { id }] });
      queryClient.invalidateQueries({ queryKey: ["locationpeakpickdetails"] });
    },
    onError: () => {
      toast.error("Failed to delete locationpeakpickdetails");
    },
  });

  return mutation;
};
