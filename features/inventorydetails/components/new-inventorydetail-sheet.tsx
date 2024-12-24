import { Loader2 } from 'lucide-react';
import { z } from 'zod';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle
} from '@/components/ui/sheet';
import { useCreateInventorydetail } from '@/features/inventorydetails/api/use-create-inventorydetail';
import { InventorydetailForm } from '@/features/inventorydetails/components/inventorydetail-form';
import { useNewInventorydetail } from '@/features/inventorydetails/hooks/use-new-inventorydetail';

// Assuming you have a schema for inventorydetail, replace this with the actual schema
const inventorydetailSchema = z.object({
  itemCode:  z
  .string()
  .optional()
  .transform((val) => (val ? parseInt(val) : undefined)),
    location: z
    .string()
    .optional()
    .transform((val) => (val ? parseInt(val) : undefined)),
    onHandInventoryQuantity: z
    .string()
    .optional()
    .transform((val) => (val ? parseInt(val) : undefined)),
    onHandInventoryValue: z
  .string()
  .optional()
  .transform((val) => (val ? parseInt(val) : undefined)),
    cogs: z
  .string()
  .optional()
  .transform((val) => (val ? parseInt(val) : undefined)),
    daysOfInventory: z
  .string()
  .optional()
  .transform((val) => (val ? parseInt(val) : undefined)),
    annualDemand: z
  .string()
  .optional()
  .transform((val) => (val ? parseInt(val) : undefined)),
    inventoryTurnover: z
  .string()
  .optional()
  .transform((val) => (val ? parseInt(val) : undefined)),
    storageLocationCode:  z.string().optional(),
    storageAreaCode:  z.string().optional(),
    skuClassMovement: z.string().optional(),
});

type FormValues = z.infer<typeof inventorydetailSchema>;

export const NewInventorydetailSheet = () => {
  const { isOpen, onClose } = useNewInventorydetail();
  const createMutation = useCreateInventorydetail();
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
          <SheetTitle>New Inventory Details</SheetTitle>
          <SheetDescription>Add a Inventory Details</SheetDescription>
        </SheetHeader>
        {isLoading ? (
          <div className="absolute inset-0 flex items-center justify-center ">
            <Loader2 className="size-4 text-muted-foreground animate-spin" />
          </div>
        ) : (
          <InventorydetailForm
            onSubmit={onSubmit}
            disabled={isPending}
          />
        )}
      </SheetContent>
    </Sheet>
  );
};

