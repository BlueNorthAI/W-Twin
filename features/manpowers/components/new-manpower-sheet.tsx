import { Loader2 } from 'lucide-react';
import { z } from 'zod';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle
} from '@/components/ui/sheet';
import { useCreateManpower } from '@/features/manpowers/api/use-create-manpower';
import { ManpowerForm } from '@/features/manpowers/components/manpower-form';
import { useNewManpower } from '@/features/manpowers/hooks/use-new-manpower';

// Assuming you have a schema for manpower, replace this with the actual schema
const manpowerchema = z.object({
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

type FormValues = z.infer<typeof manpowerchema>;

export const NewManpowerSheet = () => {
  const { isOpen, onClose } = useNewManpower();
  const createMutation = useCreateManpower();

  const onSubmit = (values: FormValues) => {
    const formattedValues = {
      ...values,
    };
    createMutation.mutate(formattedValues, {
      onSuccess: () => {
        onClose();
      }
    });
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="space-y-4 bg-white">
        <SheetHeader>
          <SheetTitle>New Manpower</SheetTitle>
          <SheetDescription>Add a new manpower</SheetDescription>
        </SheetHeader>
        {createMutation.isPending ? (
          <div className="absolute inset-0 flex items-center justify-center ">
            <Loader2 className="size-4 text-muted-foreground animate-spin" />
          </div>
        ) : (
          <ManpowerForm 
            onSubmit={onSubmit} 
            disabled={createMutation.isPending}

          />
        )}
      </SheetContent>
    </Sheet>
  );
};
