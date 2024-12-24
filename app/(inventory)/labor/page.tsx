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
const totallabor = [
  {
    category: 'Client',
    field: 45.0
  },
  {
    category: 'Total',
    summary: 'total'
  },

  {
    category: 'Receiving',
    field: 3.7
  },
  {
    category: 'Storage',
    field: 2.8
  },
  {
    category: 'P&P',
    field: 13.8
  },
  {
    category: 'Shipping',
    field: 10.9
  },
  {
    category: 'Over Head',
    field: 7.4
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
            <div className="p-2">Labor Deep Drive</div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-b-lg pb-2 border">
          <div className="items-start justify-center gap-6 rounded-lg p-4 md:grid lg:grid-cols-1 xl:grid-cols-2">
            <div className="col-span-2 grid items-start gap-6 lg:col-span-2 lg:grid-cols-1 xl:col-span-1 xl:grid-cols-1">
              <DemoContainer>
                <Card className=" text-blue-900">
                  <CardHeader className="space-y-1 ">
                    <CardTitle className="text-2xl flex">Labor</CardTitle>

                    <div className="border-b" />
                  </CardHeader>
                  <CardContent className="grid  gap-4 space-y-6">
                    <ul className=" grid grid-cols-1 gap-y-4">
                      <div>
                        {' '}
                        <Chart style={{ height: 180 }}>
                          <ChartTitle text="Total Labor" />
                          <ChartSeries>
                            <ChartSeriesItem
                              type="waterfall"
                              data={totallabor}
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
                      <div>
                        {' '}
                        <Chart style={{ height: 180 }}>
                          <ChartTitle text="Blue Collar" />
                          <ChartSeries>
                            <ChartSeriesItem
                              type="waterfall"
                              data={totallabor}
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
                        <Chart style={{ height: 180 }}>
                          <ChartTitle text="White Collar" />
                          <ChartSeries>
                            <ChartSeriesItem
                              type="waterfall"
                              data={totallabor}
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

            <div className="col-span-2 grid items-start gap-6 lg:col-span-2 lg:grid-cols-1 xl:col-span-1 xl:grid-cols-1">
              <DemoContainer>
                <Card className=" text-blue-900">
                  <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl flex">Comments</CardTitle>

                    <div className="border-b" />
                  </CardHeader>
                  <CardContent className="grid  gap-5 space-y-6">
                    <div className="space-y-9">
                      <h2 className="text-lg font-bold">Labor Cost</h2>
                      <p>
                        ▪ There is a 14% improvement potential in overall labor
                      </p>

                      <p>▪ Over 1/3 of labor costs is picking and packing</p>
                      <p>
                        ▪ Receiving & storage only make up 17% of the overall
                        labor costs Blue Collar
                      </p>
                    </div>
                    <div className="space-y-9">
                      <h2 className="text-lg font-bold">Blue Collar</h2>
                      <p>
                        ▪ There are 25% more blue collar labor FTEs than
                        calculated by the{' '}
                      </p>
                      <p>
                        ▪ Half of the blue collar labor costs is calculated to
                        be in picking and packing
                      </p>
                    </div>
                    <div className="space-y-9">
                      <h2 className="text-lg font-bold">White Collar</h2>
                      <p>
                        ▪ There are 34% more white collar labor FTEs than
                        calculated by the{' '}
                      </p>
                      <p>
                        ▪ 90% of white collar labor are calculated to be in
                        shipping and overhead (which is primarily supervisors);
                        these are roughly evenly split between the 2 groups
                      </p>
                    </div>
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
