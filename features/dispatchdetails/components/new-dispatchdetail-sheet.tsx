import { Loader2 } from 'lucide-react';
import { z } from 'zod';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle
} from '@/components/ui/sheet';
import { useCreateDispatchdetail } from '@/features/dispatchdetails/api/use-create-dispatchdetail';
import { DispatchdetailForm } from '@/features/dispatchdetails/components/dispatchdetail-form';
import { useNewDispatchdetail } from '@/features/dispatchdetails/hooks/use-new-dispatchdetail';
// Assuming you have a schema for dispatchdetail, replace this with the actual schema
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

export const NewDispatchdetailSheet = () => {
  const { isOpen, onClose } = useNewDispatchdetail();
  const createMutation = useCreateDispatchdetail();



  const isPending = createMutation.isPending
  const isLoading = false

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
          <SheetTitle>New Dispatch Details </SheetTitle>
          <SheetDescription>Add a new Dispatch Details </SheetDescription>
        </SheetHeader>
        {isLoading ? (
          <div className="absolute inset-0 flex items-center justify-center ">
            <Loader2 className="size-4 text-muted-foreground animate-spin" />
          </div>
        ) : (
          <DispatchdetailForm
          onSubmit={onSubmit}
          disabled={isPending}
          />
        )}
      </SheetContent>
    </Sheet>
  );
};
