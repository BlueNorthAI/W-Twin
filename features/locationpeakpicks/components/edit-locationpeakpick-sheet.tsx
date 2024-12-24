import { Loader2 } from 'lucide-react';
import { z } from 'zod';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle
} from '@/components/ui/sheet';
import { useDeleteLocationPeakpickDetails } from '@/features/locationpeakpicks/api/use-delete-locationpeakpick';
import { useEditLocationPeakpickDetails } from '@/features/locationpeakpicks/api/use-edit-locationpeakpick';
import { useGetLocationPeakpickDetails } from '@/features/locationpeakpicks/api/use-get-locationpeakpick';
import { LocationPeakpickForm } from '@/features/locationpeakpicks/components/locationpeakpick-form';
import { useOpenLocationPeakpickDetails } from '@/features/locationpeakpicks/hooks/use-open-locationpeakpicks';

import { useConfirm } from '@/hooks/use-confirm';

// Use the actual locationpeakpick schema, omitting the id field for editing
// const formSchema = locationPeakpickchema.omit({ id: true });
const locationPeakpickchema = z.object({

    locationCode:z.string().optional(),
receiptPeakTimeStart:z.string().optional(),
shift1Pickers:z.number().int(),
ordersShift1:z.number().int(),
picksShift1:z.number().int(),
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

type FormValues = z.infer<typeof locationPeakpickchema>;

export const EditLocationPeakpickSheet = () => {
  const { isOpen, onClose, id } = useOpenLocationPeakpickDetails();

  const [ConfirmDialog, confirm] = useConfirm(
    'Are you sure?',
    'You are about to delete this locationpeakpick.'
  );

  const locationpeakpickQuery = useGetLocationPeakpickDetails(id);
  const editMutation = useEditLocationPeakpickDetails(id);
  const deleteMutation = useDeleteLocationPeakpickDetails(id);

  const isPending =
    editMutation.isPending ||
    deleteMutation.isPending ||
    locationpeakpickQuery.isLoading;

  const isLoading = locationpeakpickQuery.isLoading;

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

  const defaultValues = locationpeakpickQuery.data
    ? {
        locationCode:locationpeakpickQuery.data.locationCode,
        receiptPeakTimeStart:locationpeakpickQuery.data.receiptPeakTimeStart,
        shift1Pickers:locationpeakpickQuery.data.shift1Pickers,
        ordersShift1:locationpeakpickQuery.data.ordersShift1,
        picksShift1:locationpeakpickQuery.data.picksShift1,
        workingHoursPerDay:locationpeakpickQuery.data.workingHoursPerDay,
        timeForPicking:locationpeakpickQuery.data.timeForPicking,
        ordersPerHour:locationpeakpickQuery.data.ordersPerHour,
      }
    : {
        locationCode:'',
receiptPeakTimeStart:'',
shift1Pickers:0,
ordersShift1:0,
picksShift1:0,
workingHoursPerDay:0,
timeForPicking:0,
ordersPerHour:0,

      };

  return (
    <>
      <ConfirmDialog />
      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent className="space-y-4 bg-white">
          <SheetHeader>
            <SheetTitle>Edit LocationPeakpick</SheetTitle>
            <SheetDescription>
              Edit an existing locationpeakpick
            </SheetDescription>
          </SheetHeader>
          {isLoading ? (
            <div className="absolute inset-0 flex items-center justify-center">
              <Loader2 className="size-4 text-muted-foreground animate-spin" />
            </div>
          ) : (
            <LocationPeakpickForm
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
