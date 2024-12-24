import { Loader2 } from 'lucide-react';
import { z } from 'zod';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle
} from '@/components/ui/sheet';
import { useDeleteInventorydetail } from '@/features/inventorydetails/api/use-delete-inventorydetail';
import { useEditInventorydetail } from '@/features/inventorydetails/api/use-edit-inventorydetail';
import { useGetInventorydetail } from '@/features/inventorydetails/api/use-get-inventorydetail';
import { InventorydetailForm } from '@/features/inventorydetails/components/inventorydetail-form';
import { useOpenInventorydetail } from '@/features/inventorydetails/hooks/use-open-inventorydetails';

import { useConfirm } from '@/hooks/use-confirm';
// Import the actual inventorydetail schema from your schema file

// Use the actual inventorydetail schema, omitting the id field for editing
// const formSchema = inventorydetailSchema.omit({ id: true });
const inventorydetailSchema = z.object({
  itemCode:  z.number().int(),
  location:  z.number().int(),
  onHandInventoryQuantity:  z.number().int(),
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
  annualDemand:  z.number().int(),
  inventoryTurnover: z
.string()
.optional()
.transform((val) => (val ? parseInt(val) : undefined)),
  storageLocationCode:  z.string().optional(),
  storageAreaCode:  z.string().optional(),
  skuClassMovement: z.string().optional(),

});

type FormValues = z.infer<typeof inventorydetailSchema>;

export const EditInventorydetailSheet = () => {
  const { isOpen, onClose, id } = useOpenInventorydetail();

  const [ConfirmDialog, confirm] = useConfirm(
    'Are you sure?',
    'You are about to delete this inventorydetail.'
  );
  const inventorydetailQuery = useGetInventorydetail(id);
  const editMutation = useEditInventorydetail(id);
  const deleteMutation = useDeleteInventorydetail(id);

  const isPending =
    editMutation.isPending ||
    deleteMutation.isPending ||
    inventorydetailQuery.isLoading;

  const isLoading = inventorydetailQuery.isLoading;

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

  const defaultValues = inventorydetailQuery.data
    ? {
itemCode:inventorydetailQuery.data.itemCode ?? undefined,
location:inventorydetailQuery.data.location ?? undefined,
onHandInventoryQuantity:inventorydetailQuery.data.onHandInventoryQuantity ?? undefined,
onHandInventoryValue:inventorydetailQuery.data.onHandInventoryValue ?? undefined,
cogs:inventorydetailQuery.data.cogs ?? undefined,
daysOfInventory:inventorydetailQuery.data.daysOfInventory ?? undefined,
annualDemand:inventorydetailQuery.data.annualDemand ?? undefined,
inventoryTurnover:inventorydetailQuery.data.inventoryTurnover ?? undefined,
storageLocationCode:inventorydetailQuery.data.storageLocationCode ?? undefined,
storageAreaCode:inventorydetailQuery.data.storageAreaCode ?? undefined,
skuClassMovement:inventorydetailQuery.data.skuClassMovement ?? undefined,
      }
    : {
itemCode:0,
location:0,
onHandInventoryQuantity:0,
onHandInventoryValue:0,
cogs:0,
daysOfInventory:0,
annualDemand:0,
inventoryTurnover:0,
storageLocationCode:'',
storageAreaCode:'',
skuClassMovement:'',
      };

  return (
    <>
      <ConfirmDialog />
      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent className="space-y-4 bg-white">
          <SheetHeader>
            <SheetTitle>Edit Inventorydetail</SheetTitle>
            <SheetDescription>
              Edit an existing inventorydetail
            </SheetDescription>
          </SheetHeader>
          {isLoading ? (
            <div className="absolute inset-0 flex items-center justify-center">
              <Loader2 className="size-4 text-muted-foreground animate-spin" />
            </div>
          ) : (
            <InventorydetailForm
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
