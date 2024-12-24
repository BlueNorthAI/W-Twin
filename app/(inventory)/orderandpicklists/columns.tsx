"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { orderandpicklist } from "@/db/schema"

import { Actions } from './actions';
// Define the type for a orderandpicklist based on the schema
type Orderandpicklist = typeof orderandpicklist.$inferSelect

export const columns: ColumnDef<Orderandpicklist>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false
  },  
  {
    accessorKey: 'itemCode',
    header: 'Item Code'
  },
 
  {
    accessorKey: 'location',
    header: 'Location'
  },
  {
    accessorKey: 'orderNumber',
    header: 'Order Number'
  },
  {
    accessorKey: 'picklistNumber',
    header: 'Pick List Number'
  },
  {
    accessorKey: 'quantity',
    header: 'Quantity'
  },
  
  // {
  //   accessorKey: 'date',
  //   header: ({ column }) => {
  //     return (
  //       <Button
  //         variant="ghost"
  //         onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
  //       >
  //        Date
  //         <ArrowUpDown className="ml-2 size-4" />
  //       </Button>
  //     );
  //   },
  //   cell: ({ row }) => {
  //     const createdAt = row.original.date;
  //     if (createdAt instanceof Date) {
  //       return createdAt.toLocaleDateString();
  //     } else if (typeof createdAt === 'string') {
  //       return new Date(createdAt).toLocaleDateString();
  //     } else {
  //       return 'Invalid Date';
  //     }
  //   }
  // },
  {
    id: 'actions',
    cell: ({ row }) => <Actions id={row.original.id.toString()} />
  }
];
