import uuid from 'uuid';
import db from '../db';
import cache from '../cache';
import { checkPassword } from './passwordHandler';

const SESSION_AGE = 7 * 86400 * 1000; // session duration of one week

export default async function login(record) {
  const { password } = record;
  const res = await db.execute(async ({ findOne, find }) => {
    const rec = await findOne('User', { userName: record.userName });
    const checkPasswordStatus = await checkPassword(password, rec.password);
    if (!rec || !checkPasswordStatus) {
      throw new Error('Invalid username/password');
    }
    // const pendingQuestionRes = await find('UserQuestion', { serveStatus: 1 });
    // console.log('pending Questions status', pendingQuestionRes);
    const token = uuid();
    const user = {
      id: rec.id,
      name: rec.name,
      userName: rec.email,
      type: rec.type,
      token,
      // pendingQuestion: pendingQuestionRes,
    };
    cache.users.set(token, user, SESSION_AGE);
    return user;
  });
  return res;
}
