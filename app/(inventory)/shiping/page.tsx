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
import CapacityChart from './DemandHeatChart';
import 'hammerjs';

const totalExpenseData = [
  {
    category: 'Equipment',
    field: 0.7
  },
  {
    category: 'Space',
    field: 0
  },
  {
    category: 'White Collar',
    field: 10.4
  },
  {
    category: 'Blue Collar',
    field: 6.4
  },
  {
    category: 'Total',
    summary: 'total'
  }
];
const [blueSeries, redBlueSeries] = [[9.2], [6.9]];
const [LaborblueSeries, LaborredBlueSeries] = [[5.6], [7.2]];
const [TotalblueSeries, TotalredBlueSeries] = [[6.1], [7.4]];

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
            <div className="p-2">Shipping - Overview</div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-b-lg pb-2 border">
          <div className="flex justify-between  gap-6 rounded-lg p-4 ">
            <div className="w-4/5 grid items-start  gap-2 lg:col-span-2 lg:grid-cols-1 xl:col-span-1 xl:grid-cols-1">
              <DemoContainer>
                <Card className=" text-blue-900">
                  <CardHeader className="space-y-1 ">
                    <CardTitle className="text-2xl flex">
                      Shipping Cost by Resource Type
                    </CardTitle>

                    <div className="border-b" />
                  </CardHeader>

                  <CardContent className="grid gap-4 space-y-4">
                    <ul className=" grid grid-cols-1 ">
                      <div>
                        {' '}
                        <Chart style={{ height: 508 }}>
                          {/* <ChartTitle text="Cash flow" /> */}
                          <ChartSeries>
                            <ChartSeriesItem
                              type="waterfall"
                              data={totalExpenseData}
                              color={pointColor}
                              field="field"
                              categoryField="category"
                              summaryField="summary"
                            >
                              <ChartSeriesLabels />
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
              <DemoContainer>
                <Card className=" ">
                  <CardHeader className="space-y-1 text-blue-900">
                    <CardTitle className="text-2xl flex">KPIs</CardTitle>

                    <div className="border-b" />
                  </CardHeader>
                  <CardContent className="grid  gap-4 space-y-6">
                    <ul className=" grid grid-cols-1 gap-x-2">
                      <div>
                        <CapacityChart />{' '}
                      </div>
                    </ul>
                  </CardContent>
                </Card>
              </DemoContainer>
            </div>

            <div className="w-1/4 grid items-start gap-6 ">
              <DemoContainer>
                <Card className=" text-blue-900">
                  <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl flex">Comments</CardTitle>

                    <div className="border-b" />
                  </CardHeader>

                  <CardContent className="grid  gap-5 space-y-9">
                    <p>
                      ▪ The bulk of the shipping costs are in blue and white
                      collar costs
                    </p>

                    <p>
                      ▪ Due to the high administrative requirements there are
                      very high white collar costs
                    </p>
                    <p>
                      ▪ The clean sheet expects a 60%increase in orders packed per hour compared to today
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
