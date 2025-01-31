import { useMutation, useQueryClient } from '@tanstack/react-query';
import { InferRequestType, InferResponseType } from 'hono';
import { toast } from 'sonner';

import { client } from '@/lib/hono';

type ResponseType = InferResponseType<
  (typeof client.api.dispatchdetails)[':id']['$patch']
>;
type RequestType = InferRequestType<
  (typeof client.api.dispatchdetails)[':id']['$patch']
>['json'];

export const useEditDispatchdetail = (id?: string) => {
  const queryClient = useQueryClient();

  const mutation = useMutation<ResponseType, Error, RequestType>({
    mutationFn: async (json) => {
      if (!id) throw new Error('ID is required');
      const response = await client.api.dispatchdetails[':id']['$patch']({
        param: { id },
        json
      });
      return await response.json();
    },
    onSuccess: () => {
      toast.success('dispatchdetails updated');
      queryClient.invalidateQueries({ queryKey: ['dispatchdetail', { id }] });
      queryClient.invalidateQueries({ queryKey: ['dispatchdetail'] });
      queryClient.invalidateQueries({ queryKey: ['summary'] });
    },
    onError: () => {
      toast.error('Failed to edit dispatchdetail');
    }
  });

  return mutation;
};
