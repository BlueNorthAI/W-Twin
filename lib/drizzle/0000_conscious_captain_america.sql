CREATE TABLE IF NOT EXISTS "Chat" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"createdAt" timestamp NOT NULL,
	"messages" json NOT NULL,
	"userId" varchar(64) NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "dispatch_details" (
	"id" serial PRIMARY KEY NOT NULL,
	"location_code" varchar(255),
	"goods_issue_reference_number" varchar(255),
	"date_of_dispatch" timestamp,
	"quantity_cases_dispatched" integer,
	"hours_from_peak_dispatch" real
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "inventory_details" (
	"id" serial PRIMARY KEY NOT NULL,
	"item_code" integer,
	"location" integer,
	"on_hand_inventory_quantity" integer,
	"on_hand_inventory_value" numeric(12, 2),
	"cogs" numeric(12, 2),
	"days_of_inventory" numeric,
	"annual_demand" integer,
	"inventory_turnover" numeric(10, 2),
	"storage_location_code" varchar(255),
	"storage_area_code" varchar(255),
	"sku_class_movement" varchar(50)
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "picking_performance_details" (
	"id" serial PRIMARY KEY NOT NULL,
	"location_code" varchar(255),
	"receipt_peak_time_start" varchar(2255),
	"receipt_peak_time_end" varchar(225),
	"dispatch_peak_time_start" varchar(2255),
	"dispatch_peak_time_end" varchar(225),
	"shift_1_pickers" integer,
	"shift_2_pickers" integer,
	"shift_3_pickers" integer,
	"total_pickers_per_day" integer,
	"orders_shift_1" integer,
	"orders_shift_2" integer,
	"orders_shift_3" integer,
	"total_orders_per_day" integer,
	"picks_shift_1" integer,
	"picks_shift_2" integer,
	"picks_shift_3" integer,
	"total_picks_per_day" integer,
	"parts_picked_per_day" integer,
	"working_hours_per_day" numeric,
	"time_walking_to_location" numeric,
	"time_reading_pick_list" numeric,
	"time_locating_part" numeric,
	"time_for_picking" numeric,
	"waiting_time_forklift" numeric,
	"time_to_consolidation_area" numeric,
	"total_picking_time" numeric,
	"orders_per_day_per_picker" numeric,
	"orders_per_hour" numeric,
	"orders_per_hour_per_picker" numeric,
	"picks_per_day_per_picker" numeric,
	"picks_per_hour" numeric,
	"picks_per_hour_per_picker" numeric
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "shifts" (
	"id" serial PRIMARY KEY NOT NULL,
	"area" varchar(255),
	"shift_1" integer,
	"shift_2" integer,
	"shift_3" integer
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "picking_details" (
	"id" serial PRIMARY KEY NOT NULL,
	"item_code" varchar(255),
	"location" text,
	"date" timestamp,
	"order_number" integer,
	"picklist_number" integer,
	"quantity" integer
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "overview" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255),
	"time" varchar,
	"category" varchar(255),
	"value" numeric,
	"metric" varchar(255),
	"country" varchar(255)
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "receipt_details" (
	"id" serial PRIMARY KEY NOT NULL,
	"location_code" varchar(255),
	"grn_reference_number" varchar(255),
	"date_of_receipt" integer,
	"quantity_cases_received" integer,
	"hours_from_peak" integer
);
