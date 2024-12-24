import React from 'react';
import CapacityChart from './DemandHeatChart';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
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

export default function page() {
  return (
    <div className="m-2">
      <div className="flex items-center justify-center  rounded-t-lg bg-gradient-to-t from-indigo-400 via-cyan-400 to-sky-500 shadow-lg p-0.5">
        <div className=" flex items-center w-full justify-between bg-sky-50  border rounded-t-lg text-2xl text-blue-900 font-bold">
          <div className="p-2">Process KPIs</div>
        </div>
      </div>
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-b-lg p-2 border">
        <DemoContainer>
          <CapacityChart />
        </DemoContainer>
      </div>
    </div>
  );
}
