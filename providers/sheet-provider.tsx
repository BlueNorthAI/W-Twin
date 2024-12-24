'use client';

import { useMountedState } from 'react-use';
// import { NewAssetsconstraintSheet } from '@/features/assetsconstraints/components/new-assetsconstraint-sheet';
// import { EditAssetsconstraintSheet } from '@/features/assetsconstraints/components/edit-assetsconstraint-sheet';
// import { NewcustomconstraintSheet } from "@/features/customconstraints/components/new-customconstraint-sheet";
// import { EditcustomconstraintSheet } from "@/features/customconstraints/components/edit-customconstraint-sheet";
import { NewManpowerSheet } from '@/features/manpowers/components/new-manpower-sheet';
import { EditManpowerSheet } from '@/features/manpowers/components/edit-manpower-sheet';
import { NewDispatchdetailSheet } from '@/features/dispatchdetails/components/new-dispatchdetail-sheet';
import { EditDispatchdetailSheet } from '@/features/dispatchdetails/components/edit-dispatchdetail-sheet';
import { NewReceiptdetailSheet } from '@/features/receiptdetails/components/new-receiptdetail-sheet';
import { EditReceiptdetailSheet } from '@/features/receiptdetails/components/edit-receiptdetail-sheet';
import { NewOrderandpicklistSheet } from '@/features/orderandpicklists/components/new-orderandpicklist-sheet';
import { EditOrderandpicklistSheet } from '@/features/orderandpicklists/components/edit-orderandpicklist-sheet';
import { NewInventorydetailSheet } from '@/features/inventorydetails/components/new-inventorydetail-sheet';
import { EditInventorydetailSheet } from '@/features/inventorydetails/components/edit-inventorydetail-sheet';
import { NewLocationPeakpickSheet } from '@/features/locationpeakpicks/components/new-locationpeakpick-sheet';
import { EditLocationPeakpickSheet } from '@/features/locationpeakpicks/components/edit-locationpeakpick-sheet';

export const SheetProvider = () => {
  const isMounted = useMountedState();

  if (!isMounted) return null;

  return (
    <>
      {/* <NewAssetsconstraintSheet />
      <EditAssetsconstraintSheet /> */}

      {/* <NewcustomconstraintSheet/>
      <EditcustomconstraintSheet /> */}

      <NewManpowerSheet />
      <EditManpowerSheet />

      <NewDispatchdetailSheet />
      <EditDispatchdetailSheet />

      <NewReceiptdetailSheet />
      <EditReceiptdetailSheet />

      <NewOrderandpicklistSheet />
      <EditOrderandpicklistSheet />

      <NewInventorydetailSheet />
      <EditInventorydetailSheet />

      <NewLocationPeakpickSheet />
      <EditLocationPeakpickSheet />
    </>
  );
};
