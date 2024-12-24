"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { locationPeakpick } from "@/db/schema"

import { Actions } from './actions';
// Define the type for a locationpeakpick based on the schema
type LocationPeakpick = typeof locationPeakpick.$inferSelect

export const columns: ColumnDef<LocationPeakpick>[] = [
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
    header: 'ocationCode'
  },
  {
    accessorKey: 'receiptPeakTimeStart',
    header: 'Receipt Peak Time Start'
  },
  {
    accessorKey: 'shift1Pickers',
    header: 'Shift1 Pickers'
  },
  {
    accessorKey: 'picksShift1',
    header: 'Picks Shift1'
  },
  {
    accessorKey: 'workingHoursPerDay',
    header: 'Working Hours Per Day'
  },
  {
    accessorKey: 'timeForPicking',
    header: 'Time For Picking'
  },
  {
    accessorKey: 'ordersPerHour',
    header: 'Orders Per Hour'
  },

  

  {
    id: 'actions',
    cell: ({ row }) => <Actions id={row.original.id.toString()} />
  }
];
