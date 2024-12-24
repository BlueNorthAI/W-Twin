import { useMutation, useQueryClient } from '@tanstack/react-query';
import { InferRequestType, InferResponseType } from 'hono';
import { toast } from 'sonner';

import { client } from '@/lib/hono';


type ResponseType = InferResponseType<typeof client.api.orderandpicklists.$post>;
type RequestType = InferRequestType<typeof client.api.orderandpicklists.$post>['json'];

export const useCreateOrderandpicklist = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation<ResponseType, Error, RequestType>({
    mutationFn: async (json) => {
      const response = await client.api.orderandpicklists.$post({ json });
      return await response.json();
    },
    onSuccess: () => {
      toast.success('orderandpicklists created');
      queryClient.invalidateQueries({ queryKey: ['orderandpicklists'] });
    },
    onError: () => {
      toast.error('Failed to orderandpicklists');
    }
  });

  return mutation;
};
