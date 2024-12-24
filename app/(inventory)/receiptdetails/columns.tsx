"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { receiptDetails } from "@/db/schema"

import { Actions } from './actions';
// Define the type for a receiptdetail based on the schema
type Receiptdetail = typeof receiptDetails.$inferSelect

export const columns: ColumnDef<Receiptdetail>[] = [
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
    accessorKey: 'locationCode',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Location Code
          <ArrowUpDown className="ml-2 size-4" />
        </Button>
      );
    }
  },
  {
    accessorKey: 'grnReferenceNumber',
    header: 'Grn Reference Number'
  },
  {
    accessorKey: 'timeofreceipt',
    header: 'Time OF Receipt'
  },
  {
    accessorKey: 'quantityCasesReceived',
    header: 'Quantity Cases Received'
  },
  {
    accessorKey: 'numberofhoursFromPeak',
    header: 'Number of Hours From Peak'
  },
  {
    accessorKey: 'dateOfReceipt',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Date Of Receipt
          <ArrowUpDown className="ml-2 size-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const dateOfReceipt = row.original.dateOfReceipt;
      if (dateOfReceipt instanceof Date) {
        return dateOfReceipt.toLocaleDateString();
      } else if (typeof dateOfReceipt === 'string') {
        return new Date(dateOfReceipt).toLocaleDateString();
      } else {
        return 'Invalid Date';
      }
    }
  },
  {
    id: 'actions',
    cell: ({ row }) => <Actions id={row.original.id.toString()} />
  }
];
