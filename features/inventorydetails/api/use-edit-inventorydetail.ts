import { useMutation, useQueryClient } from '@tanstack/react-query';
import { InferRequestType, InferResponseType } from 'hono';
import { toast } from 'sonner';

import { client } from '@/lib/hono';

type ResponseType = InferResponseType<
  (typeof client.api.inventorydetails)[':id']['$patch']
>;
type RequestType = InferRequestType<
  (typeof client.api.inventorydetails)[':id']['$patch']
>['json'];

export const useEditInventorydetail = (id?: string) => {
  const queryClient = useQueryClient();

  const mutation = useMutation<ResponseType, Error, RequestType>({
    mutationFn: async (json) => {
      
      const response = await client.api.inventorydetails[':id']['$patch']({
        param: { id },
        json
      });
      return await response.json();
    },
    onSuccess: () => {
      toast.success('Inventorydetails updated');
      queryClient.invalidateQueries({ queryKey: ['inventorydetail', { id }] });
      queryClient.invalidateQueries({ queryKey: ['inventorydetails'] });
      queryClient.invalidateQueries({ queryKey: ['summary'] });
    },
    onError: () => {
      toast.error('Failed to edit inventorydetail');
    }
  });

  return mutation;
};
