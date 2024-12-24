"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { dispatchDetails } from "@/db/schema"

import { Actions } from './actions';
// Define the type for a assetsconstraint based on the schema
type Dispatchdetail = typeof dispatchDetails.$inferSelect

export const columns: ColumnDef<Dispatchdetail>[] = [
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
    accessorKey: 'goodsIssueReferenceNumber',
    header: 'Goods Issue Reference Number'
  },
  {
    accessorKey: 'quantityCasesDispatched',
    header: 'Quantity Cases Dispatched'
  },
  {
    accessorKey: 'numberofhoursFromPeakDispatch',
    header: 'Number of Hours From Peak Dispatch'
  },
  {
    accessorKey: 'dateOfDispatch',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Date Of Dispatch
          <ArrowUpDown className="ml-2 size-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const dateOfDispatch = row.original.dateOfDispatch;
      if (dateOfDispatch instanceof Date) {
        return dateOfDispatch.toLocaleDateString();
      } else if (typeof dateOfDispatch === 'string') {
        return new Date(dateOfDispatch).toLocaleDateString();
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
