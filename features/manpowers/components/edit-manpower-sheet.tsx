import { Loader2 } from 'lucide-react';
import { z } from 'zod';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle
} from '@/components/ui/sheet';
import { useDeleteManpower } from '@/features/manpowers/api/use-delete-manpower';
import { useEditManpower } from '@/features/manpowers/api/use-edit-manpower';
import { useGetManpower } from '@/features/manpowers/api/use-get-manpower';
import { ManpowerForm } from '@/features/manpowers/components/manpower-form';
import { useOpenManpower } from '@/features/manpowers/hooks/use-open-manpowers';

import { useConfirm } from '@/hooks/use-confirm';
// Import the actual manpower schema from your schema file

// Use the actual manpower schema, omitting the id field for editing
// const formSchema = manpowerSchema.omit({ id: true });
const manpowerSchema = z.object({
  area: z.string().optional(),
  shift1: z
    .string()
    .optional()
    .transform((val) => (val ? parseInt(val) : undefined)),
  shift2:  z
    .string()
    .optional()
    .transform((val) => (val ? parseInt(val) : undefined)),
  shift3:   z
    .string()
    .optional()
    .transform((val) => (val ? parseInt(val) : undefined)),

});

type FormValues = z.infer<typeof manpowerSchema>;

export const EditManpowerSheet = () => {
  const { isOpen, onClose, id } = useOpenManpower();

  const [ConfirmDialog, confirm] = useConfirm(
    'Are you sure?',
    'You are about to delete this manpower.'
  );
  const manpowerQuery = useGetManpower(id);
  const editMutation = useEditManpower(id);
  const deleteMutation = useDeleteManpower(id);

  const isPending =
    editMutation.isPending ||
    deleteMutation.isPending ||
    manpowerQuery.isLoading;

  const isLoading = manpowerQuery.isLoading;

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

  const defaultValues = manpowerQuery.data
    ? {
      area: manpowerQuery.data.area ?? undefined,
        shift1: manpowerQuery.data.shift1 ?? undefined,
        shift2: manpowerQuery.data.shift2 ?? undefined,
        shift3: manpowerQuery.data.shift3 ?? undefined,
}
    : {
      area: '',
      shift1: 0,
      shift2: 0,
      shift3: 0,

      };

  return (
    <>
      <ConfirmDialog />
      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent className="space-y-4 bg-white">
          <SheetHeader>
            <SheetTitle>Edit Manpower</SheetTitle>
            <SheetDescription>
              Edit an existing manpower
            </SheetDescription>
          </SheetHeader>
          {isLoading ? (
            <div className="absolute inset-0 flex items-center justify-center">
              <Loader2 className="size-4 text-muted-foreground animate-spin" />
            </div>
          ) : (
            <ManpowerForm
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