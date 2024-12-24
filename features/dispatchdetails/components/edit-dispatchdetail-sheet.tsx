import { Loader2 } from 'lucide-react';
import { z } from 'zod';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle
} from '@/components/ui/sheet';
import { useDeleteDispatchdetail } from '@/features/dispatchdetails/api/use-delete-dispatchdetail';
import { useEditDispatchdetail } from '@/features/dispatchdetails/api/use-edit-dispatchdetail';
import { useGetDispatchdetail } from '@/features/dispatchdetails/api/use-get-dispatchdetail';
import { DispatchdetailForm } from '@/features/dispatchdetails/components/dispatchdetail-form';
import { useOpendispatchdetail } from '@/features/dispatchdetails/hooks/use-open-dispatchdetail';

import { useConfirm } from '@/hooks/use-confirm';
// Import the actual dispatchdetail schema from your schema file

// Use the actual dispatchdetail schema, omitting the id field for editing
// const formSchema = dispatchdetailSchema.omit({ id: true });
const dispatchdetailSchema = z.object({
  locationCode: z.string().optional(),
  goodsIssueReferenceNumber: z.string().optional(),
  quantityCasesDispatched:z
  .string()
  .optional()
  .transform((val) => (val ? parseInt(val) : undefined)),
  numberofhoursFromPeakDispatch:z
  .string()
  .optional()
  .transform((val) => (val ? parseInt(val) : undefined)),


});

type FormValues = z.infer<typeof dispatchdetailSchema>;

export const EditDispatchdetailSheet = () => {
  const { isOpen, onClose, id } = useOpendispatchdetail();

  const [ConfirmDialog, confirm] = useConfirm(
    'Are you sure?',
    'You are about to delete this dispatchdetail.'
  );
  const dispatchdetailQuery = useGetDispatchdetail(id);
  const editMutation = useEditDispatchdetail(id);
  const deleteMutation = useDeleteDispatchdetail(id);

  const isPending =
    editMutation.isPending ||
    deleteMutation.isPending ||
    dispatchdetailQuery.isLoading;

  const isLoading = dispatchdetailQuery.isLoading;

  const onSubmit = (values: FormValues) => {
    editMutation.mutate(values, {
      onSuccess: () => {
        onClose();
      }
    });
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

  const defaultValues = dispatchdetailQuery.data
    ? {
        locationCode: dispatchdetailQuery.data.locationCode,
        goodsIssueReferenceNumber:
          dispatchdetailQuery.data.goodsIssueReferenceNumber,
        quantityCasesDispatched:
          dispatchdetailQuery.data.quantityCasesDispatched,
        numberofhoursFromPeakDispatch:
          dispatchdetailQuery.data.numberofhoursFromPeakDispatch
      }
    : {
        locationCode: '',
        goodsIssueReferenceNumber: '',
        quantityCasesDispatched: 0,
        numberofhoursFromPeakDispatch: 0
      };

  return (
    <>
      <ConfirmDialog />
      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent className="space-y-4 bg-white">
          <SheetHeader>
            <SheetTitle>Edit Dispatchdetail</SheetTitle>
            <SheetDescription>Edit an existing Dispatchdetail</SheetDescription>
          </SheetHeader>
          {isLoading ? (
            <div className="absolute inset-0 flex items-center justify-center">
              <Loader2 className="size-4 text-muted-foreground animate-spin" />
            </div>
          ) : (
            <DispatchdetailForm
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
