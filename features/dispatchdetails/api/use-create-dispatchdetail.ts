import { useMutation, useQueryClient } from '@tanstack/react-query';
import { InferRequestType, InferResponseType } from 'hono';
import { toast } from 'sonner';

import { client } from '@/lib/hono';

type ResponseType = InferResponseType<typeof client.api.dispatchdetails.$post>;
type RequestType = InferRequestType<typeof client.api.dispatchdetails.$post>['json'];

export const useCreateDispatchdetail = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation<ResponseType, Error, RequestType>({
    mutationFn: async (json) => {
      const response = await client.api.dispatchdetails.$post({ json });
      return await response.json();
    },
    onSuccess: () => {
      toast.success('dispatchdetails created');
      queryClient.invalidateQueries({ queryKey: ['dispatchdetails'] });
    },
    onError: () => {
      toast.error('Failed to dispatchdetails');
    }
  });

  return mutation;
};
