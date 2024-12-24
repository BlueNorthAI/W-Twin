import { z } from 'zod';
import { createInsertSchema } from 'drizzle-zod';
import { relations, sql } from 'drizzle-orm';
import {
  integer,
  pgTable,
  uuid,
  text,
  timestamp,
  jsonb,
  json,
  serial,
  varchar,
  index,
  numeric,
  uniqueIndex,
  doublePrecision,
  boolean,
  decimal,
  date,
  primaryKey,
  unique,
  check,
  real
} from 'drizzle-orm/pg-core';

export const chat = pgTable('Chat', {
  id: uuid('id').primaryKey().notNull().defaultRandom(),
  createdAt: timestamp('createdAt').notNull(),
  messages: json('messages').notNull(),
  userId: varchar('userId', { length: 64 }).notNull()
});

// export const receiptdetails = pgTable(
//   'assets_constraints',
//   {
//     id: serial('id').primaryKey(), // Unique identifier for each record
//     groupId: integer('group_id')
//       .notNull()
//       .references(() => groups.id, { onDelete: 'cascade' }), // Foreign key to the Groups table
//     minDcs: integer('min_dcs'), // Minimum number of DCs (or super DCs)
//     maxDcs: integer('max_dcs'), // Maximum number of DCs (or super DCs)
//     timePeriod: varchar('time_period', { length: 255 }), // Time period during which constraints are valid
//     inclusionType: varchar('inclusion_type', { length: 10 }), // Inclusion or exclusion of constraint
//     createdAt: timestamp('created_at').defaultNow(),
//     updatedAt: timestamp('updated_at').defaultNow()
//   },
//   (table) => ({
//     checkMinMax: sql`CHECK (${table.minDcs} <= ${table.maxDcs})`, // Ensure min_dcs <= max_dcs
//     idxReceiptdetailsGroupTime: index(
//       'idx_assets_constraints_group_time'
//     ).on(table.groupId, table.timePeriod) // Optional index for faster querying by group_id and time_period
//   })
// );
// export const insertReceiptdetailSchema = createInsertSchema(receiptdetails);

// export const customConstraints = pgTable(
//   'custom_constraints',
//   {
//     id: serial('id').primaryKey(),
//     leftHandSide: text('left_hand_side').notNull(),
//     comparisonType: varchar('comparison_type', { length: 2 }).notNull(),
//     rightHandSide: text('right_hand_side').notNull(),
//     constraintType: varchar('constraint_type', { length: 20 }).notNull(),
//     createdAt: timestamp('created_at').defaultNow(),
//     updatedAt: timestamp('updated_at').defaultNow()
//   },
//   (table) => ({
//     ucLeftRight: unique('uc_left_right').on(
//       table.leftHandSide,
//       table.rightHandSide
//     ),
//     idxCustomConstraintsLeftHandSide: index(
//       'idx_custom_constraints_left_hand_side'
//     ).on(table.leftHandSide),
//     idxCustomConstraintsRightHandSide: index(
//       'idx_custom_constraints_right_hand_side'
//     ).on(table.rightHandSide),
//     idxCustomConstraintsComparisonType: index(
//       'idx_custom_constraints_comparison_type'
//     ).on(table.comparisonType),
//     idxCustomConstraintsConstraintType: index(
//       'idx_custom_constraints_constraint_type'
//     ).on(table.constraintType),
//     comparisonTypeCheck: check(
//       'comparison_type_check',
//       sql`${table.comparisonType} IN ('=', '<>', '>', '<', '>=', '<=')`
//     ),
//     constraintTypeCheck: check(
//       'constraint_type_check',
//       sql`${table.constraintType} IN ('hard', 'soft', 'variable')`
//     )
//   })
// );
// export const insertcustomConstraintSchema = createInsertSchema(customConstraints);

export const orderandpicklist = pgTable('picking_details', {
  id: serial('id').primaryKey(), // Unique identifier
  itemCode: varchar('item_code', { length: 255 }), // Item Code
  location: text('location'), // Location
  date: timestamp('date'), // Date
  orderNumber: integer('order_number'), // Order Number
  picklistNumber: integer('picklist_number'), // Picklist Number
  quantity: integer('quantity') // Quantity
});
export const insertOrderandPickListSchema =
  createInsertSchema(orderandpicklist);

export const locationpeakpickDetails = pgTable('picking_performance_details', {
  // Primary Key
  id: serial('id').primaryKey(),

  // Location & Peak Time Details
  locationCode: varchar('location_code', { length: 255 }),
  receiptPeakTimeStart: varchar('receipt_peak_time_start', { length: 2255 }),
  receiptPeakTimeEnd: varchar('receipt_peak_time_end', { length: 225 }),
  dispatchPeakTimeStart: varchar('dispatch_peak_time_start', { length: 2255 }),
  dispatchPeakTimeEnd: varchar('dispatch_peak_time_end', { length: 225 }),

  // Number of Pickers
  shift1Pickers: integer('shift_1_pickers'),
  shift2Pickers: integer('shift_2_pickers'),
  shift3Pickers: integer('shift_3_pickers'),
  totalPickersPerDay: integer('total_pickers_per_day'),

  // Number of Orders Handled
  ordersShift1: integer('orders_shift_1'),
  ordersShift2: integer('orders_shift_2'),
  ordersShift3: integer('orders_shift_3'),
  totalOrdersPerDay: integer('total_orders_per_day'),

  // Picks (Picklists Handled)
  picksShift1: integer('picks_shift_1'),
  picksShift2: integer('picks_shift_2'),
  picksShift3: integer('picks_shift_3'),
  totalPicksPerDay: integer('total_picks_per_day'),

  // Number of Parts Picked
  partsPickedPerDay: integer('parts_picked_per_day'),

  // Picking Time Breakdown
  workingHoursPerDay: decimal('working_hours_per_day'),
  timeWalkingToLocation: decimal('time_walking_to_location'),
  timeReadingPickList: decimal('time_reading_pick_list'),
  timeLocatingPart: decimal('time_locating_part'),
  timeForPicking: decimal('time_for_picking'),
  waitingTimeForklift: decimal('waiting_time_forklift'),
  timeToConsolidationArea: decimal('time_to_consolidation_area'),
  totalPickingTime: decimal('total_picking_time'),

  // Efficiency Metrics
  ordersPerDayPerPicker: decimal('orders_per_day_per_picker'),
  ordersPerHour: decimal('orders_per_hour'),
  ordersPerHourPerPicker: decimal('orders_per_hour_per_picker'),
  picksPerDayPerPicker: decimal('picks_per_day_per_picker'),
  picksPerHour: decimal('picks_per_hour'),
  picksPerHourPerPicker: decimal('picks_per_hour_per_picker')
});

export const insertLocationPeakpickDetailsSchema = createInsertSchema(
  locationpeakpickDetails
);

export const receiptDetails = pgTable('receipt_details', {
  id: serial('id').primaryKey(), // Unique identifier
  locationCode: varchar('location_code', { length: 255 }), // Location Code
  grnReferenceNumber: varchar('grn_reference_number', { length: 255 }), // GRN Reference Number
  dateOfReceipt: timestamp('date_of_receipt'), // Date of Receipt
  timeofreceipt: integer('date_of_receipt'),
  quantityCasesReceived: integer('quantity_cases_received'), // Quantity/Cases Received
  numberofhoursFromPeak: integer('hours_from_peak') // Number of hours from/to peak time
});
export const insertReceiptDetailsSchema = createInsertSchema(receiptDetails);

export const dispatchDetails = pgTable('dispatch_details', {
  id: serial('id').primaryKey(), // Unique identifier
  locationCode: varchar('location_code', { length: 255 }), // Location Code
  goodsIssueReferenceNumber: varchar('goods_issue_reference_number', {
    length: 255
  }), // Goods Issue Reference Number
  dateOfDispatch: timestamp('date_of_dispatch'), // Date of Dispatch
  quantityCasesDispatched: integer('quantity_cases_dispatched'), // Quantity/Cases Dispatched
  numberofhoursFromPeakDispatch: real('hours_from_peak_dispatch') // Number of hours from/to peak dispatch time
});
export const insertDispatchDetailsSchema = createInsertSchema(dispatchDetails);

export const manPower = pgTable('shifts', {
  id: serial('id').primaryKey(), // Unique identifier for each record
  area: varchar('area', { length: 255 }), // Area name
  shift1: integer('shift_1'), // Shift 1 value
  shift2: integer('shift_2'), // Shift 2 value
  shift3: integer('shift_3') // Shift 3 value
});
export const insertManPowerSchema = createInsertSchema(manPower);

export const inventoryDetails = pgTable('inventory_details', {
  id: serial('id').primaryKey(), // Unique identifier
  itemCode: integer('item_code', { length: 255 }), // Item Code
  location: integer('location', { length: 255 }), // Location
  onHandInventoryQuantity: integer('on_hand_inventory_quantity'), // On-hand Inventory Quantity
  onHandInventoryValue: numeric('on_hand_inventory_value', {
    precision: 12,
    scale: 2
  }), // On-hand Inventory Value
  cogs: decimal('cogs', { precision: 12, scale: 2 }), // Cost of Goods Sold (COGS)
  daysOfInventory: decimal('days_of_inventory'), // Days of Inventory
  annualDemand: integer('annual_demand'), // Annual Demand
  inventoryTurnover: numeric('inventory_turnover', { precision: 10, scale: 2 }), // Inventory Turnover
  storageLocationCode: varchar('storage_location_code', { length: 255 }), // Storage Location Code
  storageAreaCode: varchar('storage_area_code', { length: 255 }), // Storage Area Code
  skuClassMovement: varchar('sku_class_movement', { length: 50 }) // Class of the SKU (Fast/Medium/Slow)
});
export const insertInventoryDetailsSchema =
  createInsertSchema(inventoryDetails);

export const overView = pgTable('overview', {
  id: serial('id').primaryKey(), // Unique identifier
  name: varchar('name', { length: 255 }), // Name
  time: varchar('time'), // Time
  category: varchar('category', { length: 255 }), // Category
  value: numeric('value'), // Value
  metric: varchar('metric', { length: 255 }), // Metric
  country: varchar('country', { length: 255 }) // Country
});
export const insertOverViewSchema = createInsertSchema(overView);