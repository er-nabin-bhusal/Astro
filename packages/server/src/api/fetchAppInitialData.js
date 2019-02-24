import db from '../db';

export default async (condition) => {
  // console.log('fetch initial data api called', condition);
  const result = await db.execute( async ({ find }) => {
    const qsnRes = await find('Question', condition);
    // console.log('questions in api', qsnRes);
    const ansRes = await find('Answer', condition);
    // console.log('answers in api', ansRes);
    return 'response from fetch api';
  });
  return result;
};
