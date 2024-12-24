import { Hono } from 'hono';
import { handle } from 'hono/vercel';

// import assetsConstraints from './assetsconstraints';
// import customConstraints from './customconstraints';
import manPower from './manpowers'
import dispatchDetail from './dispatchdetails'
import receiptDetail from './receiptdetails';
import orderandpicklist from './orderandpicklists'
import inventoryDetails from './inventorydetails'
import locationPeakpickDetails from './locationpeakpicks'
import overviews from './overviews'
export const runtime = 'nodejs';


const app = new Hono().basePath('/api');

const routes = app

// .route('/assetsconstraints', assetsConstraints)
// .route('/customconstraints', customConstraints)
.route('/manpowers', manPower)
.route('/dispatchdetails', dispatchDetail)
.route('/receiptdetails', receiptDetail)
.route('/orderandpicklists', orderandpicklist)
.route('/inventorydetails', inventoryDetails)
.route('/locationpeakpicks', locationPeakpickDetails)
.route('/overviews', overviews)

export const GET = handle(app);
export const POST = handle(app);
export const PATCH = handle(app);
export const DELETE = handle(app);

export type AppType = typeof routes;