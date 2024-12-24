import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';

import { FaBoxes} from 'react-icons/fa';
import {
  FaBoxesPacking,
  FaBoxOpen,
  FaBoxArchive,
  FaBox
} from 'react-icons/fa6';


import { Chart1 } from './chart1';

const chartData = [{ month: '', desktop: 50.9, mobile: 42.0 }];
const chartData2 = [{ month: '', desktop: 0.7, mobile: 0.6 }];
const chartData3 = [{ month: '', desktop: 3.2, mobile: 2.4 }];
const chartData4 = [{ month: '', desktop: 50.9, mobile: 42.0 }];
//1table
const chartData5 = [{ month: '', desktop: 1.2, mobile: 1.5 }];
const chartData6 = [{ month: '', desktop: 86.9, mobile: 103.2 }];
const chartData7 = [{ month: '', desktop: 19.2, mobile: 23.4 }];
const chartData8 = [{ month: '', desktop: 1.2, mobile: 1.5 }];
//2table
const chartData9 = [{ month: '', desktop: 1.3, mobile: 1.4 }];
const chartData10 = [{ month: '', desktop: 90.8, mobile: 100.5 }];
const chartData11 = [{ month: '', desktop: 20.0, mobile: 22.1 }];
const chartData12 = [{ month: '', desktop: 1.3, mobile: 1.4 }];



const inventory = [
  {
    title: 'Unit',
    orderline: <FaBoxArchive className="mx-auto size-12 text-center" />,
    order: <FaBoxOpen className="mx-auto size-12 text-center" />,
    pallet: <FaBoxes className="mx-auto size-12 text-center" />,
    pack: <FaBoxesPacking className="mx-auto size-12 text-center" />,
    case: <FaBox className="mx-auto size-12 text-center" />
  },
  {
    title: 'Direct Labour Productivity',
    name: '',
    orderline: <Chart1 data={chartData} />,
    order: <Chart1 data={chartData2} />,
    pallet: <Chart1 data={chartData3} />,
    pack: 'NA',
    case: <Chart1 data={chartData4} />
  },
  {
    title: 'Total Labour Cost',
    name: '',
    orderline: <Chart1 data={chartData5} />,
    order: <Chart1 data={chartData6} />,
    pallet: <Chart1 data={chartData7} />,
    pack: 'NA',
    case: <Chart1 data={chartData8} />
  },
  {
    title: 'Total Cost',
    name: '',
    orderline: <Chart1 data={chartData9} />,
    order: <Chart1 data={chartData10} />,
    pallet: <Chart1 data={chartData11} />,
    pack: 'NA',
    case: <Chart1 data={chartData12} />
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
                <TableHead className="text-center ">Orderline</TableHead>
                <TableHead className="text-center">Order</TableHead>
                <TableHead className="text-center">Pallet</TableHead>
                <TableHead className="text-center">Pack</TableHead>
                <TableHead className="text-center">Case</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {inventory.map((invoice) => (
                <TableRow key={invoice.title} >
                  <TableCell className="font-medium">{invoice.title}</TableCell>
                  <TableCell className="text-center">
                    {invoice.orderline}
                  </TableCell>
                  <TableCell className="text-center">
                    {invoice.order}
                  </TableCell>
                  <TableCell className=" text-center">
                    {invoice.pallet}
                  </TableCell>
                  <TableCell className=" text-center">{invoice.pack}</TableCell>
                  <TableCell className="text-center">{invoice.case}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
