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

type FormValues = z.infer<typeof formSchema>;

type Props = {
  id?: number;
  defaultValues?: Partial<FormValues>;
  onSubmit: (values: FormValues) => void;
  onDelete?: () => void;
  disabled?: boolean;
};

export const InventorydetailForm = ({
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
    console.log('inventorydetailvalues', values);
    onSubmit(values);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="space-y-4 pt-4 bg-white"
      >
        <FormField
          name="itemCode"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Item Code</FormLabel>
              <FormControl>
              <Input
                  {...field}
                  disabled={disabled}
                  placeholder="itemCode"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="location"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Location</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  disabled={disabled}
                  placeholder="location"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="onHandInventoryQuantity"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>On Hand Inventory Quantity</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  disabled={disabled}
                  placeholder="onHandInventoryQuantity"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="onHandInventoryValue"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>on Hand Inventory Value</FormLabel>
              <FormControl>
              <Input
                  {...field}
                  disabled={disabled}
                  placeholder="onHandInventoryValue"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="cogs"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Cogs</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  disabled={disabled}
                  placeholder="cogs"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="daysOfInventory"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Days Of Inventory</FormLabel>
              <FormControl>
              <Input
                  {...field}
                  disabled={disabled}
                  placeholder="daysOfInventory"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="annualDemand"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Annual Demand</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  disabled={disabled}
                  placeholder="annualDemand"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="inventoryTurnover"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Inventory Turnover</FormLabel>
              <FormControl>
              <Input
                  {...field}
                  disabled={disabled}
                  placeholder="inventoryTurnover"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="storageLocationCode"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Storage Location Code</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  disabled={disabled}
                  placeholder="storageLocationCode"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
          <FormField
          name="storageAreaCode"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>storage Area Code</FormLabel>
              <FormControl>
              <Input
                  {...field}
                  disabled={disabled}
                  placeholder="storageAreaCode"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="skuClassMovement"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Sku Class Movement</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  disabled={disabled}
                  placeholder="skuClassMovement"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-full" disabled={disabled}>
          {id ? 'Save changes' : 'Create inventorydetail'}
        </Button>
        {!!id && (
          <Button
            type="button"
            disabled={disabled}
            onClick={onDelete}
            className="w-full"
            variant="outline"
          >
            Delete inventorydetail
          </Button>
        )}
      </form>
    </Form>
  );
};
