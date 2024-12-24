import { Loader2 } from 'lucide-react';
import { z } from 'zod';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle
} from '@/components/ui/sheet';
import { useCreateLocationPeakpickDetails } from '@/features/locationpeakpicks/api/use-create-locationpeakpick';
import { LocationPeakpickForm } from '@/features/locationpeakpicks/components/locationpeakpick-form';
import { useNewLocationPeakpickDetails } from '@/features/locationpeakpicks/hooks/use-new-locationpeakpick';
// Assuming you have a schema for locationpeakpick, replace this with the actual schema
const locationpeakpickSchema = z.object({
    locationCode:z.string().optional(),
    receiptPeakTimeStart:z.string().optional(),
    shift1Pickers:z
    .string()
    .optional()
    .transform((val) => (val ? parseInt(val) : undefined)),
    ordersShift1:z
    .string()
    .optional()
    .transform((val) => (val ? parseInt(val) : undefined)),
    picksShift1:z
    .string()
    .optional()
    .transform((val) => (val ? parseInt(val) : undefined)),
    workingHoursPerDay:z
    .string()
    .optional()
    .transform((val) => (val ? parseInt(val) : undefined)),
    timeForPicking:z
    .string()
    .optional()
    .transform((val) => (val ? parseInt(val) : undefined)),
    ordersPerHour:z
    .string()
    .optional()
    .transform((val) => (val ? parseInt(val) : undefined)),
});

type FormValues = z.infer<typeof locationpeakpickSchema>;

export const NewLocationPeakpickSheet = () => {
  const { isOpen, onClose } = useNewLocationPeakpickDetails();
  const createMutation = useCreateLocationPeakpickDetails();
  const isPending = createMutation.isPending;
  const isLoading = false;

  const onSubmit = (values: FormValues) => {
    const formattedValues = {
      ...values,
      workingHoursPerDay: values.workingHoursPerDay?.toString(),
      timeForPicking: values.timeForPicking?.toString(),
      ordersPerHour: values.ordersPerHour?.toString()
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
          <SheetTitle>New LocationPeakpick</SheetTitle>
          <SheetDescription>Add a new locationpeakpick</SheetDescription>
        </SheetHeader>
        {isLoading ? (
          <div className="absolute inset-0 flex items-center justify-center ">
            <Loader2 className="size-4 text-muted-foreground animate-spin" />
          </div>
        ) : (
          <LocationPeakpickForm
           onSubmit={onSubmit}
           disabled={isPending}
           groupOptions={[]} />
        )}
      </SheetContent>
    </Sheet>
  );
};
