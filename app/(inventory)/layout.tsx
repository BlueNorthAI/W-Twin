'use client';
import {
  AdjustmentsHorizontalIcon,
  ChartBarIcon,
  PresentationChartLineIcon,
  TableCellsIcon
} from '@heroicons/react/24/outline';
import { LifeBuoy, SquareUser } from 'lucide-react';
import { TbLayoutDashboard } from 'react-icons/tb';
import SidebarShadcn from '@/components/SidebarShadcn';
import { RiBarChartBoxLine } from 'react-icons/ri';
import { GrTree } from 'react-icons/gr';
import { BsBarChartLine } from 'react-icons/bs';
import { LuTable } from 'react-icons/lu';

const senariomenus = [
  {
    name: 'Warehouse Cost',
    to: '/warehouse',
    icon: <ChartBarIcon className="size-5" />,
    current: true
  },
  {
    name: 'Overall Kpis',
    to: '/kpi',
    icon: <PresentationChartLineIcon className="size-5" />,
    current: true
  },
  {
    name: 'Process Kpis',
    to: '/process',
    icon: <TableCellsIcon className="size-5" />,
    current: true
  },
  {
    name: 'Labor Deep Drive',
    to: '/labor',
    icon: <TbLayoutDashboard className="size-5" />,
    current: true
  },
  {
    name: 'Space Analysis',
    to: '/space',
    icon: <BsBarChartLine className="size-5" />,
    current: true
  },

  {
    name: 'Receiving',
    to: '/receving',
    icon: <BsBarChartLine className="size-5" />,
    current: true
  },

  {
    name: 'Receiving - Equipment',
    to: '/equip',
    icon: <LuTable className="size-5 " />,
    current: true
  },
  {
    name: 'Storage',
    to: '/storage',
    icon: <BsBarChartLine className="size-5 " />,
    current: true
  },
  {
    name: 'Storage & Equipment',
    to: '/storageequip',
    icon: <LuTable className="size-5 " />,
    current: true
  },
  {
    name: 'Pick & Pack',
    to: '/pick',
    icon: <BsBarChartLine className="size-5 " />,
    current: true
  },
  {
    name: 'Pick & Pack - Equipment',
    to: '/pickequip',
    icon: <LuTable className="size-5 " />,
    current: true
  },
  {
    name: 'Shiping',
    to: '/shiping',
    icon: <BsBarChartLine className="size-5 " />,
    current: true
  },
  {
    name: 'Shiping - Equipment',
    to: '/shipequip',
    icon: <LuTable className="size-5 " />,
    current: true
  },
  {
    name: 'orderandpicklists',
    to: '/orderandpicklists',
    icon: <TableCellsIcon className="size-5" />,
    current: true
  },
  {
    name: 'locationpeakpicks',
    to: '/locationpeakpicks',
    icon: <TableCellsIcon className="size-5" />,
    current: true
  },
  {
    name: 'receiptdetails',
    to: '/receiptdetails',
    icon: <TableCellsIcon className="size-5" />,
    current: true
  },
  {
    name: 'dispatchdetails',
    to: '/dispatchdetails',
    icon: <TableCellsIcon className="size-5" />,
    current: true
  },
  {
    name: 'manpowers',
    to: '/manpowers',
    icon: <TableCellsIcon className="size-5" />,
    current: true
  },
  {
    name: 'inventorydetails',
    to: '/inventorydetails',
    icon: <TableCellsIcon className="size-5" />,
    current: true
  }
];

const bottomNavItems = [
  { icon: <LifeBuoy className="size-5" />, label: 'Help', href: '/help' },
  {
    icon: <SquareUser className="size-5 " />,
    label: 'Account',
    href: '/account'
  }
];

export default function Page({ children }: { children: React.ReactNode }) {


  return (
    <div className="h-full">
      <div className="pl-[73px]">
        {/* <Header title="Inventory Optimizer" navigation={[]} /> */}
      </div>
      <div className="max-h-full">
        <SidebarShadcn
          sidebarMenu={senariomenus}
          bottomNavItems={bottomNavItems}
        />

        <main className="pl-[56px] mx-4"> {children}</main>
      </div>
    </div>
  );
}
