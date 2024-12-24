import { useMutation, useQueryClient } from '@tanstack/react-query';
import { InferRequestType, InferResponseType } from 'hono';
import { toast } from 'sonner';

import { client } from '@/lib/hono';

type ResponseType = InferResponseType<
  (typeof client.api.receiptdetails)[':id']['$patch']
>;
type RequestType = InferRequestType<
  (typeof client.api.receiptdetails)[':id']['$patch']
>['json'];

export const useEditReceiptdetail = (id?: string) => {
  const queryClient = useQueryClient();

  const mutation = useMutation<ResponseType, Error, RequestType>({
    mutationFn: async (json) => {
      if (!id) throw new Error('ID is required');
      const response = await client.api.receiptdetails[':id']['$patch']({
        param: { id },
        json
      });
      return await response.json();
    },
    onSuccess: () => {
      toast.success('receiptdetail updated');
      queryClient.invalidateQueries({ queryKey: ['receiptdetail', { id }] });
      queryClient.invalidateQueries({ queryKey: ['receiptdetail'] });
      queryClient.invalidateQueries({ queryKey: ['summary'] });
    },
    onError: () => {
      toast.error('Failed to edit receiptdetail');
    }
  });

  return mutation;
};
