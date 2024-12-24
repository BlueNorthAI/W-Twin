'use client';


import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import { cn } from '@/lib/utils';
import {
  Chart,
  ChartLegend,
  ChartSeries,
  ChartSeriesItem,
  ChartSeriesLabels,
  ChartTitle,
  ChartValueAxis,
  ChartValueAxisItem
} from '@progress/kendo-react-charts';
import 'hammerjs';
const totalExpenseData = [
  {
    category: 'Shipping',
    field: 5
  },
  {
    category: 'P&P',
    field: 801
  },
  {
    category: 'Storage',
    field: 7974
  },
  {
    category: 'Receiving',
    field: 1886
  },
  {
    category: 'Total',
    summary: 'total'
  }
];

const ExpenseData = [
  {
    category: 'Shipping',
    field: 0
  },
  {
    category: 'P&P',
    field: 0.1
  },
  {
    category: 'Storage',
    field: 0.9
  },
  {
    category: 'Receiving',
    field: 0.2
  },
  {
    category: 'Total',
    summary: 'total'
  }
];
const [firstSeries, secondSeries] = [
  [31213],
  [11733]
];
function pointColor(point: { dataItem: { summary: any; }; value: number; }) {
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
            <div className="p-2">Space Analysis</div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-b-lg pb-2 border">
          <div className="flex justify-between  gap-6 rounded-lg p-4 ">
            <div className="w-full grid col-span-2 items-start  gap-2 lg:col-span-2 lg:grid-cols-1 xl:col-span-1 xl:grid-cols-2">
              <DemoContainer>
                <Card className=" text-blue-900">
                  <CardHeader className="space-y-1 ">
                    <CardTitle className="text-2xl flex">
                      Warehouse Space
                    </CardTitle>

                    <div className="border-b" />
                  </CardHeader>

                  <CardContent className="grid gap-4 space-y-4">
                    <ul className=" grid grid-cols-1 ">
                      <div>
                        {' '}
                        <Chart style={{ height: 575 }}>
                          <ChartTitle text="Warehouse Space" />
                          <ChartSeries>
                            <ChartSeriesItem
                              type="column"
                              gap={2}
                              data={firstSeries}
                            />
                            <ChartSeriesItem
                              type="column"
                              data={secondSeries}
                            />
                          </ChartSeries>
                          <ChartValueAxis>
                            <ChartValueAxisItem />
                          </ChartValueAxis>
                        </Chart>
                      </div>
                    </ul>
                  </CardContent>
                </Card>
              </DemoContainer>
              <DemoContainer>
                <Card className=" text-blue-900">
                  <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl flex">
                      Cost comparison
                    </CardTitle>

                    <div className="border-b" />
                  </CardHeader>
                  <CardContent className="grid  gap-4 space-y-6">
                    <ul className=" grid grid-cols-1 gap-y-4">
                      <div>
                        {' '}
                        <Chart style={{ height: 278 }}>
                          <ChartTitle text="Clean Sheeted Warehouse Space Cost" />
                          <ChartSeries>
                            <ChartSeriesItem
                              type="waterfall"
                              data={ExpenseData}
                              color={pointColor}
                              field="field"
                              categoryField="category"
                              summaryField="summary"
                            >
                              <ChartSeriesLabels format="n0" />
                            </ChartSeriesItem>
                          </ChartSeries>
                          <ChartValueAxis>
                            <ChartValueAxisItem />
                          </ChartValueAxis>
                        </Chart>
                      </div>

                      <div>
                        {' '}
                        <Chart style={{ height: 278 }}>
                          <ChartTitle text="Clean Sheeted Warehouse Space" />
                          <ChartSeries>
                            <ChartSeriesItem
                              type="waterfall"
                              data={totalExpenseData}
                              color={pointColor}
                              field="field"
                              categoryField="category"
                              summaryField="summary"
                            >
                              <ChartSeriesLabels format="n0" />
                            </ChartSeriesItem>
                          </ChartSeries>
                          <ChartValueAxis>
                            <ChartValueAxisItem />
                          </ChartValueAxis>
                        </Chart>
                      </div>
                    </ul>
                  </CardContent>
                </Card>
              </DemoContainer>
            </div>

            <div className="w-80 grid items-start gap-6 ">
              <DemoContainer>
                <Card className=" text-blue-900">
                  <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl flex">
                      Cost comparison
                    </CardTitle>

                    <div className="border-b" />
                  </CardHeader>
                  <CardContent className="grid  gap-4 space-y-6">
                    <ul className=" grid grid-cols-1 gap-y-4">
                      ▪ calculates a much smaller footprint (62% smaller); this
                      difference in space needs to be investigated – Are there
                      other non-warehousing activities? – Is the warehouse at a
                      low usage rate (i.e. 50% full) ▪ Nearly 70% of space
                      costs are driven by storage (this is expected as typically
                      storage is the bulk of the space required)
                    </ul>
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
