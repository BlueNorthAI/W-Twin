import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Select } from '@/components/select';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

const formSchema = z.object({
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

type FormValues = z.infer<typeof formSchema>;

type Props = {
  id?: number;
  defaultValues?: Partial<FormValues>;
  onSubmit: (values: FormValues) => void;
  onDelete?: () => void;
  disabled?: boolean;
  groupOptions: { label: string; value: number }[];
};

export const LocationPeakpickForm = ({
  id,
  defaultValues,
  onSubmit,
  onDelete,
  disabled,
  groupOptions
}: Props) => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValues || {
    }
  });

  const handleSubmit = (values: FormValues) => {
    console.log('locationpeakpickvalues', values);
    onSubmit(values);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="space-y-4 pt-4 bg-white"
      >
        <FormField
          name="locationCode"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Location Code</FormLabel>
              <FormControl>
              <Input
                  {...field}
                  disabled={disabled}
                  placeholder="locationCode"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="receiptPeakTimeStart"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Receipt Peak Time Start </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  disabled={disabled}
                  placeholder="receiptPeakTimeStart"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="shift1Pickers"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Shift1 Pickers</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  disabled={disabled}
                  placeholder="shift1Pickers"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="ordersShift1"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Orders Shift1</FormLabel>
              <FormControl>
              <Input
                  {...field}
                  disabled={disabled}
                  placeholder="ordersShift1"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="picksShift1"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Picks Shift1</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  disabled={disabled}
                  placeholder="picksShift1"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="workingHoursPerDay"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Working Hours Per Day</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  disabled={disabled}
                  placeholder="workingHoursPerDay"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="timeForPicking"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Time For Picking</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  disabled={disabled}
                  placeholder="timeForPicking"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="ordersPerHour"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Orders Per Hour</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  disabled={disabled}
                  placeholder="ordersPerHour"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-full" disabled={disabled}>
          {id ? 'Save changes' : 'Create locationpeakpick'}
        </Button>
        {!!id && (
          <Button
            type="button"
            disabled={disabled}
            onClick={onDelete}
            className="w-full"
            variant="outline"
          >
            Delete locationpeakpick
          </Button>
        )}
      </form>
    </Form>
  );
};
