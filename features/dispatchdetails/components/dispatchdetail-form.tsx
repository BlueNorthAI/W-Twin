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

type FormValues = z.infer<typeof formSchema>;

type Props = {
  id?: number;
  defaultValues?: Partial<FormValues>;
  onSubmit: (values: FormValues) => void;
  onDelete?: () => void;
  disabled?: boolean;

};

export const DispatchdetailForm = ({
  id,
  defaultValues,
  onSubmit,
  onDelete,
  disabled,

}: Props) => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValues || {

    }
  });

  const handleSubmit = (values: FormValues) => {
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
                  placeholder="Location Code"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="goodsIssueReferenceNumber"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Goods Issue Reference Number</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  disabled={disabled}
                  placeholder="Goods Issue Reference Number"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="quantityCasesDispatched"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Quantity Cases Dispatched</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  disabled={disabled}
                  placeholder="Quantity Cases Dispatched"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="numberofhoursFromPeakDispatch"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Number of hours from/to peak dispatch time</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  disabled={disabled}
                  placeholder="Number of hours from/to peak dispatch time"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-full" disabled={disabled}>
          {id ? 'Save changes' : 'Create Dispatch Detail'}
        </Button>
        {!!id && (
          <Button
            type="button"
            disabled={disabled}
            onClick={onDelete}
            className="w-full"
            variant="outline"
          >
            Delete Dispatch Detail
          </Button>
        )}
      </form>
    </Form>
  );
};
