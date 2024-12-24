import { useMutation, useQueryClient } from '@tanstack/react-query';
import { InferRequestType, InferResponseType } from 'hono';
import { toast } from 'sonner';

import { client } from '@/lib/hono';


type ResponseType = InferResponseType<
  (typeof client.api.manpowers)[':id']['$patch']
>;
type RequestType = InferRequestType<
  (typeof client.api.manpowers)[':id']['$patch']
>['json'];

export const useEditManpower = (id?: string) => {
  const queryClient = useQueryClient();

  const mutation = useMutation<ResponseType, Error, RequestType>({
    mutationFn: async (json) => {
      
      const response = await client.api.manpowers[':id']['$patch']({
        param: { id },
        json
      });
      return await response.json();
    },
    onSuccess: () => {
      toast.success('Manpowers updated');
      queryClient.invalidateQueries({ queryKey: ['manpower', { id }] });
      queryClient.invalidateQueries({ queryKey: ['manpowers'] });
      queryClient.invalidateQueries({ queryKey: ['summary'] });
    },
    onError: () => {
      toast.error('Failed to edit manpower');
    }
  });

  return mutation;
};
