import { Loader2 } from 'lucide-react';
import { z } from 'zod';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle
} from '@/components/ui/sheet';
import { useCreateReceiptDetails } from '@/features/receiptdetails/api/use-create-receiptdetail';
import { ReceiptdetailForm } from '@/features/receiptdetails/components/receiptdetail-form';
import { useNewReceiptdetail } from '@/features/receiptdetails/hooks/use-new-receiptdetail';
// Assuming you have a schema for receiptdetail, replace this with the actual schema
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

export const NewReceiptdetailSheet = () => {
  const { isOpen, onClose } = useNewReceiptdetail();
  const createMutation = useCreateReceiptDetails();

  const isPending = createMutation.isPending;
  const isLoading = false;

  const onSubmit = (values: FormValues) => {
    createMutation.mutate(values, {
      onSuccess: () => {
        onClose();
      }
    });
  };
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="space-y-4 bg-white">
        <SheetHeader>
          <SheetTitle>New Receiptdetail</SheetTitle>
          <SheetDescription>Add a new receiptdetail</SheetDescription>
        </SheetHeader>
        {isLoading ? (
          <div className="absolute inset-0 flex items-center justify-center ">
            <Loader2 className="size-4 text-muted-foreground animate-spin" />
          </div>
        ) : (
          <ReceiptdetailForm
            onSubmit={(values: FormValues) => onSubmit(values)}
            disabled={isPending}
          />
        )}
      </SheetContent>
    </Sheet>
  );
};
