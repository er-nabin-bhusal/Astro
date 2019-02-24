import db from '../db';

export default async (record) => {
  const respose = await db.execute(async ({ insert }) => {
    const res = await insert('User', record);
    // console.log('add bidha user Response', res);
    return res;
  });
  return respose;
};
