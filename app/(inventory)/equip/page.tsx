'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import { cn } from '@/lib/utils';
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
import { IoCaretDownSharp } from 'react-icons/io5';
const invoices = [
  {
    equipmentType: 'Forklift',
    warehouseOperationDaysPerYear: '300',
    warehouseOperationHoursPerDay: '16',
    unitPrice: '32,247'
  },
  {
    equipmentType: 'Ramp',
    warehouseOperationDaysPerYear: '300',
    warehouseOperationHoursPerDay: '16',
    unitPrice: '38,696'
  }
];
const invoices2 = [
  {
    equipmentType: 'Forklift',
    unitsRequiredForReceiving: '17.3',
    opex: '175,00'
  },
  {
    equipmentType: 'Ramp',
    unitsRequiredForReceiving: '11.5',
    opex: '116,000'
  }
];
function pointColor(point: { dataItem: { summary: any }; value: number }) {
  let summary = point.dataItem.summary;
  if (summary) {
    return summary === 'total' ? '#f43f5e' : 'gray';
  }
  if (point.value > 0) {
    return 'skyblue';
  } else {
    return 'red';
  }
}
function DemoContainer({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'flex items-center justify-center [&>div]:w-full',
        className
      )}
      {...props}
    />
  );
}
export default function Optimizer() {
  return (
    <>
      <div className="m-2">
        <div className="flex items-center justify-center  rounded-t-lg bg-gradient-to-t from-indigo-400 via-cyan-400 to-sky-500 shadow-lg p-0.5">
          <div className=" flex items-center w-full justify-between bg-sky-50  border rounded-t-lg text-2xl text-blue-900 font-bold">
            <div className="p-2">Receiving - Equipment Assessment</div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-b-lg pb-2 border">
          <div className="items-start justify-center gap-6 rounded-lg p-4 md:grid lg:grid-cols-1 xl:grid-cols-2">
            <div className="col-span-2 grid items-start  gap-2 lg:col-span-2 lg:grid-cols-1 xl:col-span-1 xl:grid-cols-1 ">
              <DemoContainer>
                <Card className=" ">
                  <CardHeader className="space-y-1 text-blue-900">
                    <CardTitle className="text-2xl flex">
                      Cost comparison
                    </CardTitle>
                    <div className="border-b" />
                  </CardHeader>

                  <CardContent className="grid gap-4 space-y-4">
                    <ul className=" grid grid-cols-1 ">
                      <div>
                        <Table className="bg-orange-100">
                          <TableHeader>
                            <TableRow>
                              <TableHead>Equipment Type</TableHead>
                              <TableHead>
                                Warehouse Operation days per year
                              </TableHead>
                              <TableHead>
                                Warehouse Operation hours per day
                              </TableHead>
                              <TableHead className="">Unit Price</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {invoices.map((invoice) => (
                              <TableRow key={invoice.equipmentType}>
                                <TableCell className="font-medium">
                                  {invoice.equipmentType}
                                </TableCell>
                                <TableCell>
                                  {invoice.warehouseOperationDaysPerYear}
                                </TableCell>
                                <TableCell>
                                  {invoice.warehouseOperationHoursPerDay}
                                </TableCell>
                                <TableCell>{invoice.unitPrice}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                      <div className="mt-4 flex items-center justify-center">
                        <IoCaretDownSharp className="text-7xl w-40 h-20" />
                      </div>
                      <div className="mt-4">
                        <Table className="bg-green-100">
                          <TableHeader>
                            <TableRow>
                              <TableHead>Equipment Type</TableHead>
                              <TableHead>
                                Units required for receiving
                              </TableHead>
                              <TableHead>OPEX</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {invoices2.map((invoice2) => (
                              <TableRow key={invoice2.equipmentType}>
                                <TableCell className="font-medium">
                                  {invoice2.equipmentType}
                                </TableCell>
                                <TableCell>
                                  {invoice2.unitsRequiredForReceiving}
                                </TableCell>
                                <TableCell>{invoice2.opex}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                    </ul>
                  </CardContent>
                </Card>
              </DemoContainer>
            </div>

            <div className="col-span-2 grid items-start gap-6 lg:col-span-2 lg:grid-cols-1 xl:col-span-1 xl:grid-cols-1">
              <DemoContainer>
                <Card className=" text-blue-900">
                  <CardHeader className="space-y-1 ">
                    <CardTitle className="text-2xl flex">Comments</CardTitle>
                    <div className="border-b" />
                  </CardHeader>
                  <CardContent className="grid  gap-4 space-y-6">
                    <p>
                      ▪ A total of 17 forklifts are required in the receiving
                      process
                    </p>

                    <p>
                      ▪ An estimated 11.5 ramps (also known as dock doors) are
                      required to unload the incoming trucks
                    </p>
                  </CardContent>
                </Card>
              </DemoContainer>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
