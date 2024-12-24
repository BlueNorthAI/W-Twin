import { useMutation, useQueryClient } from '@tanstack/react-query';
import { InferRequestType, InferResponseType } from 'hono';
import { toast } from 'sonner';

import { client } from '@/lib/hono';


type ResponseType = InferResponseType<typeof client.api.locationpeakpicks.$post>;
type RequestType = InferRequestType<typeof client.api.locationpeakpicks.$post>['json'];

export const useCreateLocationPeakpickDetails = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation<ResponseType, Error, RequestType>({
    mutationFn: async (json) => {
      const response = await client.api.locationpeakpicks.$post({ json });
      if (!response.ok) {
        throw new Error('Failed to create locationpeakpicks');
      }
      return await response.json();
    },
    onSuccess: () => {
      toast.success('locationpeakpicks created');
      queryClient.invalidateQueries({ queryKey: ['locationpeakpicks'] });
    },
    onError: () => {
      toast.error('Failed to locationpeakpicks');
    }
  });

  return mutation;
};
