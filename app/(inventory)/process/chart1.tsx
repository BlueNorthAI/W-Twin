'use client';

import { TrendingUp } from 'lucide-react';
import { Bar, BarChart, CartesianGrid, XAxis,LabelList } from 'recharts';


import { ChartContainer, ChartTooltipContent, ChartTooltip, ChartConfig } from '@/components/ui/chart';
 
const chartData = [
  { month: 'January', desktop: 186, mobile: 80 },
];

const chartConfig = {
  desktop: {
    label: 'Desktop',
    color: 'hsl(var(--chart-2))'
  },
  mobile: {
    label: 'Mobile',
    color: 'hsl(var(--chart-1))'
  }
} satisfies ChartConfig;

export function Chart1({ data }) {
  return (
    <ChartContainer config={chartConfig} >
      <BarChart accessibilityLayer data={data}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={3}>
          <LabelList
            position="insideBottom"
            offset={12}
            className="fill-white"
            fontSize={14}
          />
        </Bar>
     
      </BarChart>
    </ChartContainer>
  );
}
