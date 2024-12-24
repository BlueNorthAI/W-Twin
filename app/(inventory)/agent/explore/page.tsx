'use client';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';

import { useGetOverviews } from '@/features/overviews/api/use-get-overviews';



export default function TableDemo() {
  const overviewsQuery = useGetOverviews();
  const overviews = overviewsQuery.data || [];
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Time</TableHead>
          <TableHead>Catogery</TableHead>
          <TableHead>Value</TableHead>
          <TableHead>Metric</TableHead>
          <TableHead>Country</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {overviews.map((invoice) => (
          <TableRow key={invoice.name}>
            <TableCell className="font-medium">{invoice.name}</TableCell>
            <TableCell>{invoice.time}</TableCell>
            <TableCell>{invoice.category}</TableCell>
            <TableCell>{invoice.value}</TableCell>
            <TableCell>{invoice.metric}</TableCell>
            <TableCell>{invoice.country}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
