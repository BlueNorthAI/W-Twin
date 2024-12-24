import { Loader2 } from 'lucide-react';
import { z } from 'zod';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle
} from '@/components/ui/sheet';
import { useCreateOrderandpicklist } from '@/features/orderandpicklists/api/use-create-orderandpicklist';
import { OrderandpicklistForm } from '@/features/orderandpicklists/components/orderandpicklist-form';
import { useNewOrderandpicklist } from '@/features/orderandpicklists/hooks/use-new-orderandpicklist';
// Assuming you have a schema for orderandpicklist, replace this with the actual schema
const orderandpicklistSchema = z.object({
  itemCode: z.string().optional(),
  location: z.string().optional(),
  orderNumber: z
  .string()
  .optional()
  .transform((val) => (val ? parseInt(val) : undefined)),
  picklistNumber: z
  .string()
  .optional()
  .transform((val) => (val ? parseInt(val) : undefined)),
  quantity: z
  .string()
  .optional()
  .transform((val) => (val ? parseInt(val) : undefined)),
});

type FormValues = z.infer<typeof orderandpicklistSchema>;

export const NewOrderandpicklistSheet = () => {
  const { isOpen, onClose } = useNewOrderandpicklist();
  const createMutation = useCreateOrderandpicklist();

  const isPending = createMutation.isPending;
  const isLoading = false;

  const onSubmit = (values: FormValues) => {
    console.log(values)
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
          <SheetTitle>New Orderandpicklist</SheetTitle>
          <SheetDescription>Add a new orderandpicklist</SheetDescription>
        </SheetHeader>
        {isLoading ? (
          <div className="absolute inset-0 flex items-center justify-center ">
            <Loader2 className="size-4 text-muted-foreground animate-spin" />
          </div>
        ) : (
          <OrderandpicklistForm
          onSubmit={onSubmit}
          disabled={isPending}
          />
        )}
      </SheetContent>
    </Sheet>
  );
};
