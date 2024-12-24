import { useMutation, useQueryClient } from '@tanstack/react-query';
import { InferRequestType, InferResponseType } from 'hono';
import { toast } from 'sonner';

import { client } from '@/lib/hono';

type ResponseType = InferResponseType<
  (typeof client.api.locationpeakpicks)[':id']['$patch']
>;
type RequestType = InferRequestType<
  (typeof client.api.locationpeakpicks)[':id']['$patch']
>['json'];

export const useEditLocationPeakpickDetails = (id?: string) => {
  const queryClient = useQueryClient();

  const mutation = useMutation<ResponseType, Error, RequestType>({
    mutationFn: async (json) => {
      if (!id) throw new Error('ID is required');
      const response = await client.api.locationpeakpicks[':id']['$patch']({
        param: { id },
        json
      });
      return await response.json();
    },
    onSuccess: () => {
      toast.success('LocationPeakpickDetails updated');
      queryClient.invalidateQueries({ queryKey: ['locationpeakpickdetails', { id }] });
      queryClient.invalidateQueries({ queryKey: ['locationpeakpickdetails'] });
      queryClient.invalidateQueries({ queryKey: ['summary'] });
    },
    onError: () => {
      toast.error('Failed to edit locationpeakpickdetails');
    }
  });

  return mutation;
};
