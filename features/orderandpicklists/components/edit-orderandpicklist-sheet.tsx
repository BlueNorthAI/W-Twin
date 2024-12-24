import { Loader2 } from 'lucide-react';
import { z } from 'zod';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle
} from '@/components/ui/sheet';
import { useDeleteOrderandpicklist } from '@/features/orderandpicklists/api/use-delete-orderandpicklist';
import { useEditOrderandpicklist } from '@/features/orderandpicklists/api/use-edit-orderandpicklist';
import { useGetOrderandpicklist } from '@/features/orderandpicklists/api/use-get-orderandpicklist';
import { OrderandpicklistForm } from '@/features/orderandpicklists/components/orderandpicklist-form';
import { useOpenOrderandpicklist } from '@/features/orderandpicklists/hooks/use-open-orderandpicklists';

import { useConfirm } from '@/hooks/use-confirm';
// Import the actual orderandpicklist schema from your schema file

// Use the actual orderandpicklist schema, omitting the id field for editing
// const formSchema = orderandpicklistSchema.omit({ id: true });
const orderandpicklistSchema = z.object({
  itemCode: z.string().optional(),
  location: z.string().optional(),
  orderNumber:z
    .string()
    .optional()
    .transform((val) => (val ? parseInt(val) : undefined)),
  picklistNumber:  z
    .string()
    .optional()
    .transform((val) => (val ? parseInt(val) : undefined)),
  quantity: z
    .string()
    .optional()
    .transform((val) => (val ? parseInt(val) : undefined)),
});

type FormValues = z.infer<typeof orderandpicklistSchema>;

export const EditOrderandpicklistSheet = () => {
  const { isOpen, onClose, id } = useOpenOrderandpicklist();

  const [ConfirmDialog, confirm] = useConfirm(
    'Are you sure?',
    'You are about to delete this orderandpicklist.'
  );
  const orderandpicklistQuery = useGetOrderandpicklist(id);
  const editMutation = useEditOrderandpicklist(id);
  const deleteMutation = useDeleteOrderandpicklist(id);

  const isPending =
    editMutation.isPending ||
    deleteMutation.isPending ||
    orderandpicklistQuery.isLoading;

  const isLoading = orderandpicklistQuery.isLoading;

  const onSubmit = (values: FormValues) => {
    editMutation.mutate(values,{
        onSuccess: () => {
          onClose();
        }
      }
    );
  };

  const onDelete = async () => {
    const ok = await confirm();

    if (ok) {
      deleteMutation.mutate(undefined, {
        onSuccess: () => {
          onClose();
        }
      });
    }
  };

  const defaultValues = orderandpicklistQuery.data
    ? {
        itemCode: orderandpicklistQuery.data.itemCode,
        location: orderandpicklistQuery.data.location,
        orderNumber: orderandpicklistQuery.data.orderNumber,
        picklistNumber: orderandpicklistQuery.data.picklistNumber,
        quantity: orderandpicklistQuery.data.quantity
      }
    : {
        itemCode: '',
        location: '',
        orderNumber: 0,
        picklistNumber: 0,
        quantity: 0
      };

  return (
    <>
      <ConfirmDialog />
      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent className="space-y-4 bg-white">
          <SheetHeader>
            <SheetTitle>Edit Orderandpicklist</SheetTitle>
            <SheetDescription>
              Edit an existing orderandpicklist
            </SheetDescription>
          </SheetHeader>
          {isLoading ? (
            <div className="absolute inset-0 flex items-center justify-center">
              <Loader2 className="size-4 text-muted-foreground animate-spin" />
            </div>
          ) : (
            <OrderandpicklistForm
              id={Number(id) || undefined}
              defaultValues={defaultValues}
              onSubmit={onSubmit}
              onDelete={onDelete}
              disabled={isPending}
            />
          )}
        </SheetContent>
      </Sheet>
    </>
  );
};
