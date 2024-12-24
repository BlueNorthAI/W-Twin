"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { inventoryDetails } from "@/db/schema"

import { Actions } from './actions';
// Define the type for a inventorydetail based on the schema
type Inventorydetail = typeof inventoryDetails.$inferSelect

export const columns: ColumnDef<Inventorydetail>[] = [
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
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Item Code
          <ArrowUpDown className="ml-2 size-4" />
        </Button>
      );
    }
  },
  {
    accessorKey: 'location',
    header: 'Location'
  },
  {
    accessorKey: 'onHandInventoryQuantity',
    header: 'On Hand Inventory Quantity'
  },
  {
    accessorKey: 'onHandInventoryValue',
    header: 'On Hand Inventory Value'
  },
  {
    accessorKey: 'cogs',
    header: 'cogs'
  },
  {
    accessorKey: 'daysOfInventory',
    header: 'Days Of Inventory'
  },
  {
    accessorKey: 'annualDemand',
    header: 'Annual Demand'
  },
  {
    accessorKey: 'inventoryTurnover',
    header: 'Inventory Turnover'
  },
  {
    accessorKey: 'storageLocationCode',
    header: 'Storage Location Code'
  },
  {
    accessorKey: 'storageAreaCode',
    header: 'Storage Area Code'
  },
  {
    accessorKey: 'skuClassMovement',
    header: 'Sku Class Movement'
  },
  
  {
    id: 'actions',
    cell: ({ row }) => <Actions id={row.original.id.toString()} />
  }
];
