import { Loader2 } from 'lucide-react';
import { z } from 'zod';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle
} from '@/components/ui/sheet';
import { useDeleteReceiptdetail } from '@/features/receiptdetails/api/use-delete-receiptdetail';
import { useEditReceiptdetail } from '@/features/receiptdetails/api/use-edit-receiptdetail';
import { useGetReceiptdetail } from '@/features/receiptdetails/api/use-get-receiptdetail';
import { ReceiptdetailForm } from '@/features/receiptdetails/components/receiptdetail-form';
import { useOpenReceiptdetail } from '@/features/receiptdetails/hooks/use-open-receiptdetails';

import { useConfirm } from '@/hooks/use-confirm';
// Import the actual receiptdetail schema from your schema file

// Use the actual receiptdetail schema, omitting the id field for editing
// const formSchema = receiptdetailSchema.omit({ id: true });
const receiptdetailSchema = z.object({
  locationCode: z.string().optional(),
  grnReferenceNumber: z.string().optional(),
  timeofreceipt: z
    .string()
    .optional()
    .transform((val) => (val ? parseInt(val) : undefined)),
  quantityCasesReceived: z
    .string()
    .optional()
    .transform((val) => (val ? parseInt(val) : undefined)),
  numberofhoursFromPeak: z
    .string()
    .optional()
    .transform((val) => (val ? parseInt(val) : undefined))
});

type FormValues = z.infer<typeof receiptdetailSchema>;

export const EditReceiptdetailSheet = () => {
  const { isOpen, onClose, id } = useOpenReceiptdetail();

  const [ConfirmDialog, confirm] = useConfirm(
    'Are you sure?',
    'You are about to delete this receiptdetail.'
  );
  const receiptdetailQuery = useGetReceiptdetail(id);
  const editMutation = useEditReceiptdetail(id);
  const deleteMutation = useDeleteReceiptdetail(id);

  const isPending =
    editMutation.isPending ||
    deleteMutation.isPending ||
    receiptdetailQuery.isLoading;

  const isLoading = receiptdetailQuery.isLoading;

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

  const defaultValues = receiptdetailQuery.data
    ? {
        locationCode: receiptdetailQuery.data.locationCode,
        grnReferenceNumber: receiptdetailQuery.data.grnReferenceNumber,
        timeofreceipt: receiptdetailQuery.data.timeofreceipt,
        quantityCasesReceived: receiptdetailQuery.data.quantityCasesReceived,
        numberofhoursFromPeak: receiptdetailQuery.data.numberofhoursFromPeak
      }
    : {
        locationCode: '',
        grnReferenceNumber: '',
        timeofreceipt: 0,
        quantityCasesReceived: 0,
        numberofhoursFromPeak: 0
      };

  return (
    <>
      <ConfirmDialog />
      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent className="space-y-4 bg-white">
          <SheetHeader>
            <SheetTitle>Edit Receiptdetail</SheetTitle>
            <SheetDescription>Edit an existing receiptdetail</SheetDescription>
          </SheetHeader>
          {isLoading ? (
            <div className="absolute inset-0 flex items-center justify-center">
              <Loader2 className="size-4 text-muted-foreground animate-spin" />
            </div>
          ) : (
            <ReceiptdetailForm
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
