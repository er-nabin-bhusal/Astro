import uuid from 'uuid';
import db from '../db';

export default async (record) => {
  const respose = await db.execute(async ({ insert, findOne, update }) => {
    const { firstName, gender, dob, time, country, city, state, accurateTime, registrationToken, uid } = record;

    if (registrationToken) {
      const findOneRes = await findOne('BidhaUser', { firstName, gender, dob, time, country, city, state, accurateTime, registrationToken, id: uid });
      // console.log('find one reponse', findOneRes);
      if (findOneRes) {
        delete record.uid;
        const upsertRes = await update('BidhaUser', record, { id: uid });
        // console.log('usert response', upsertRes);
        return 'Profile successfully updated';
      }
      delete record.uid;
      const res = await insert('BidhaUser', record);
      // console.log('update bidha user Response', res);
      return { updateId: res };
    }
    if (!registrationToken) {
      const token = uuid();
      delete record.uid;
      const res = await insert('BidhaUser', { ...record, registrationToken: token });
      // console.log('add bidha user Response', res);
      return { uid: res, token };
    }
  });
  return respose;
};
