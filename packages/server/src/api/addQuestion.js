import db from '../db';
import stripePayment from './stripePaymentHandler';

export default async (record) => {
  console.log('add user api callded', record);
  const response = await db.execute(async ({ insert }) => {
    // stripePayment();
    const insertRes = await insert('UserQuestion', record);
    console.log('questin insert response', insertRes);
    return insertRes;
  });
  return response;
};
