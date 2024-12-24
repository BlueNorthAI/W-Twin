import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';

import {
  FaBoxesPacking,
  FaBoxOpen,
  FaBoxArchive,
  FaBox
} from 'react-icons/fa6';

import { Chart1 } from './chart1';

const chartData = [{ month: '', desktop: 8.01 }];
const chartData2 = [{ month: '', desktop: 9.2 }];
const chartData3 = [{ month: '', desktop: 169.8 }];
const chartData4 = [{ month: '', desktop: 13 }];
const chartData5 = [{ month: '', desktop: 3 }];
//1table
const chartData6 = [{ month: '', desktop: 7.11 }];
const chartData7 = [{ month: '', desktop: 5.6 }];
const chartData8 = [{ month: '', desktop: 0.3 }];
const chartData9 = [{ month: '', desktop: 6.84 }];
const chartData10 = [{ month: '', desktop: 31.0 }];
//2table
const chartData11 = [{ month: '', desktop: 7.96 }];
const chartData12 = [{ month: '', desktop: 6.1 }];
const chartData13 = [{ month: '', desktop: 0.3 }];
const chartData14 = [{ month: '', desktop: 7 }];
const chartData15 = [{ month: '', desktop: 32.6 }];
//3table
const chartData16 = [{ month: '', desktop: 105.1 }];
const chartData17 = [{ month: '', desktop: 0.5 }];

const inventory = [
  {
    title: 'Unit',
    receiving: <FaBoxArchive className="mx-auto size-12 text-center" />,
    storage: <FaBoxArchive className="mx-auto size-12 text-center" />,
    storage_picking: <FaBoxArchive className="mx-auto size-12 text-center" />,
    picking: <FaBoxArchive className="mx-auto size-12 text-center" />,
    packing2: <FaBoxArchive className="mx-auto size-12 text-center" />,
    shipping: <FaBoxArchive className="mx-auto size-12 text-center" />,
    shipping2: <FaBoxArchive className="mx-auto size-12 text-center" />,
    shipping3: <FaBoxArchive className="mx-auto size-12 text-center" />
  },
  {
    title: 'Direct Labour Productivity',
    receiving: <Chart1 data={chartData} />,
    storage: <Chart1 data={chartData2} />,
    storage_picking: 'NA',
    picking: <Chart1 data={chartData3} />,
    packing2: 'NA',
    shipping: <Chart1 data={chartData4} />,
    shipping2: 'NA',
    shipping3: <Chart1 data={chartData5} />
  },
  {
    title: 'Total Labour Cost',
    receiving: <Chart1 data={chartData6} />,
    storage: <Chart1 data={chartData7} />,
    storage_picking: 'NA',
    picking: <Chart1 data={chartData8} />,
    packing2: 'NA',
    shipping: <Chart1 data={chartData9} />,
    shipping2: 'NA',
    shipping3: <Chart1 data={chartData10} />
  },
  {
    title: 'Total Cost',
    receiving: <Chart1 data={chartData11} />,
    storage: <Chart1 data={chartData12} />,
    storage_picking: 'NA',
    picking: <Chart1 data={chartData13} />,
    packing2: 'NA',
    shipping: <Chart1 data={chartData14} />,
    shipping2: 'NA',
    shipping3: <Chart1 data={chartData15} />
  },
  {
    title: 'Orderlines per hour',
    receiving: '',
    storage: '',
    storage_picking: '',
    picking: <Chart1 data={chartData16} />,
    packing2: 'NA',
    shipping: '',
    shipping2: '',
    shipping3: ''
  },
  {
    title: 'Cost per orderline',
    receiving: '',
    storage: '',
    storage_picking: '',
    picking: <Chart1 data={chartData17} />,
    packing2: 'NA',
    shipping: '',
    shipping2: '',
    shipping3: ''
  }
];

export default function CapacityChart() {
  return (
    <div className="bg-white rounded-b-lg border  w-100">
      <div className="flex justify-between  space-x-4 ">
        <div className="w-full bg-white rounded-b-md">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="">Title</TableHead>
                <TableHead className="text-center ">Receiving</TableHead>

                <TableHead className="text-center">Storage</TableHead>
                <TableHead className="text-center">Storage & Picking</TableHead>
                <TableHead className="text-center">Picking</TableHead>
                <TableHead className="text-center "></TableHead>

                <TableHead className="text-center">Shipping</TableHead>
                <TableHead className="text-center "></TableHead>
                <TableHead className="text-center "></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {inventory.map((invoice) => (
                <TableRow key={invoice.title}>
                  <TableCell className="font-medium">{invoice.title}</TableCell>
                  <TableCell className="text-center">
                    {invoice.receiving}
                  </TableCell>
                  <TableCell className="text-center">
                    {invoice.storage}
                  </TableCell>
                  <TableCell className=" text-center">
                    {invoice.storage_picking}
                  </TableCell>

                  <TableCell className="text-center">
                    {invoice.picking}
                  </TableCell>
                  <TableCell className="text-center">
                    {invoice.packing2}
                  </TableCell>

                  <TableCell className="">
                    {' '}
                    {invoice.shipping} 
                  </TableCell>
                  <TableCell className="">{invoice.shipping2}</TableCell>
                  <TableCell className="">{invoice.shipping3}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
