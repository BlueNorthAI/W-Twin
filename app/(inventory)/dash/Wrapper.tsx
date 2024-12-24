'use client';

import React, { useEffect, useState } from 'react';
import {
  Chart,
  ChartSeries,
  ChartSeriesItem,
} from '@progress/kendo-react-charts';
import 'hammerjs';

export default function WaterfallChartContainer() {
  const [data, setData] = useState<number[]>([]);

  useEffect(() => {
    // Simulate data fetching
    const fetchData = async () => {
      // Replace with actual data fetching logic
      const fetchedData = [1, 2, 3, 5, 8, 13]; // Example data
      setData(fetchedData);
    };

    fetchData();
  }, []);

  return (
    <Chart>
      <ChartSeries>
        <ChartSeriesItem data={data} name="Fibonacci" />
      </ChartSeries>
    </Chart>
  );
}
