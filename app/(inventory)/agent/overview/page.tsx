'use client';

import CardLayout from '@/components/snop/CardLayout';
import { useGetOverviews } from '@/features/overviews/api/use-get-overviews';
import { PieChartContainerVisible } from '@/app/kendo/charts/pie/kendoPieChart.client';
import { MultiBarChartContainer } from '@/app/kendo/charts/bar/kendoBarChart.client';
import { MultiLineChartContainer } from '@/app/kendo/charts/line/kendoLineChart.client';
import { MultiAreaChartContainer } from '@/app/kendo/charts/area/kendoAreaChart.client';
import {
  Chart,
  ChartLegend,
  ChartSeries,
  ChartSeriesItem,
  ChartSeriesLabels,
  ChartTitle
} from '@progress/kendo-react-charts';
import 'hammerjs';

const labelContent = (props) => {
  let formatedNumber = Number(props.dataItem.value).toLocaleString(undefined, {
    style: 'percent',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
  return `${formatedNumber}`;
};

export default function Flowchart() {

  const { data } = useGetOverviews();
  const invoicedAmount = data?.filter((item) => item.name === 'Total Warehouse Cost');

  const kpiData = [
    {
      Name: 'Total Warehouse Cost',
      Value: '$8.46M',
      Trend: 'up',
      TargetAch: 83,
      container: (
        <PieChartContainerVisible
          series={data?.map(item => item.value)}
          categories={data?.map(item => item.country)}
        />
      ),
      status: 'Above Target',
      Analyze: '/agent/analysis/supplyAnalysis'
    }
  ];
  return (
    <>
      <div className="m-4">
        <div className="w-100 flex  justify-between p-4 rounded-lg border bg-white">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-sky-700 to-blue-700 font-display">
            DC Dashboard
          </h2>

          <div className="flex items-center justify-end"></div>
        </div>

        <main>
          <Chart style={{ height: 700 }}>
            {/* <ChartTitle text='World Population by Broad Age Groups' /> */}
            <ChartLegend position="bottom" orientation="horizontal" />
            <ChartSeries>
              <ChartSeriesItem
                type="pie"
                data={invoicedAmount}
                field="value"
                categoryField="country"
                labels={{
                  visible: true,
                  content: labelContent
                }}
                overlay={{ gradient: 'sharpBevel' }}
                tooltip={{ visible: true }}
              />
            </ChartSeries>
          </Chart>
          {/* <CardLayout kpiData={kpiData} /> */}
        </main>
      </div>
    </>
  );
}
