import { useMutation, useQueryClient } from '@tanstack/react-query';
import { InferRequestType, InferResponseType } from 'hono';
import { toast } from 'sonner';

import { client } from '@/lib/hono';

type ResponseType = InferResponseType<typeof client.api.manpowers.$post>;
type RequestType = InferRequestType<typeof client.api.manpowers.$post>['json'];

export const useCreateManpower = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation<ResponseType, Error, RequestType>({
    mutationFn: async (json) => {
      const response = await client.api.manpowers.$post({ json });
      return await response.json();
    },
    onSuccess: () => {
      toast.success('manpower created');
      queryClient.invalidateQueries({ queryKey: ['manpowers'] });
    },
    onError: () => {
      toast.error('Failed to manpowers');
    }
  });

  return mutation;
};
