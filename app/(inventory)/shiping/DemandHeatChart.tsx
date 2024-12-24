import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import { FcPackage } from 'react-icons/fc';
import { FiPackage } from 'react-icons/fi';
import { LuPackageOpen } from 'react-icons/lu';
import { BiCategory } from 'react-icons/bi';
import { FaBoxes } from 'react-icons/fa';
import {
  FaBoxesPacking,
  FaBoxOpen,
  FaBoxArchive,
  FaBox
} from 'react-icons/fa6';

import { Chart1 } from './chart1';

const chartData = [{ month: '', desktop: 169.8, mobile: 101.9 }];
const chartData2 = [{ month: '', desktop: 0.3, mobile: 0.4 }];
const chartData3 = [{ month: '', desktop: 0.3, mobile: 0.4 }];
const chartData4 = [{ month: '', desktop: 105.1, mobile: 73.6 }];
const chartData5 = [{ month: '', desktop: 0.5, mobile: 0.6 }];

const inventory = [
  {
    title: <FaBoxes className="size-5" />,
    name: '',
    bluecollar: <Chart1 data={chartData} />,
    laborcost: <Chart1 data={chartData2} />,
    totalcost: <Chart1 data={chartData3} />
  },
  {
    title: <LuPackageOpen className="size-5" />,
    name: '',
    bluecollar: 'NA',
    laborcost: 'NA',
    totalcost: 'NA'
  },
  {
    title: <FaBoxes className="size-5" />,
    name: '',
    bluecollar: <Chart1 data={chartData} />,
    laborcost: <Chart1 data={chartData2} />,
    totalcost: <Chart1 data={chartData3} />
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
                <TableHead className="">Unit</TableHead>
                <TableHead className="text-center ">
                  Blue Collar Productivity
                </TableHead>
                <TableHead className="text-center">Labor Cost</TableHead>
                <TableHead className="text-center">Total Cost</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {inventory.map((invoice) => (
                <TableRow key={invoice.name}>
                  <TableCell className="font-medium">{invoice.title}</TableCell>
                  <TableCell className="text-center">
                    {invoice.bluecollar}
                  </TableCell>
                  <TableCell className="text-center">
                    {invoice.laborcost}
                  </TableCell>
                  <TableCell className=" text-center">
                    {invoice.totalcost}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
