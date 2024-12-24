import { useMutation, useQueryClient } from '@tanstack/react-query';
import { InferRequestType, InferResponseType } from 'hono';
import { toast } from 'sonner';

import { client } from '@/lib/hono';

type ResponseType = InferResponseType<
  (typeof client.api.orderandpicklists)[':id']['$patch']
>;
type RequestType = InferRequestType<
  (typeof client.api.orderandpicklists)[':id']['$patch']
>['json'];

export const useEditOrderandpicklist = (id?: string) => {
  const queryClient = useQueryClient();

  const mutation = useMutation<ResponseType, Error, RequestType>({
    mutationFn: async (json) => {
      if (!id) throw new Error('ID is required');
      const response = await client.api.orderandpicklists[':id']['$patch']({
        param: { id },
        json
      });
      return await response.json();
    },
    onSuccess: () => {
      toast.success('Orderandpicklists updated');
      queryClient.invalidateQueries({ queryKey: ['orderandpicklist', { id }] });
      queryClient.invalidateQueries({ queryKey: ['orderandpicklists'] });
      queryClient.invalidateQueries({ queryKey: ['summary'] });
    },
    onError: () => {
      toast.error('Failed to edit orderandpicklist');
    }
  });

  return mutation;
};
