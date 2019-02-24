import db from '../db';

export default async (user) => {
  console.log('token in fetchInitialweb data', user);
  try {
    const res = await db.execute(async ({ find }) => {
      const pendingQuestionsRes = await find('UserQuestion', { serveStatus: 1 });
      switch (user.type) {
        case 'super':
          return { pendingQuestion: pendingQuestionsRes };
        case 'moderator':
          return null;
        case 'astrologer':
          return null;
        default:
          return null;
      }
    });
    return res;
  } catch (e) {
    throw new Error('DB access failed');
  }
};
