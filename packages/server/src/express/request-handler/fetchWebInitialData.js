import validateToken from '../../auth/validateToken';
import { fetchWebInitialData } from '../../api';

export default async (req, res) => {
  const { token } = req.query;
  try {
    const user = validateToken(token);
    // console.log('fetch initial data web handler called', req.query.token, user);
    if (user) {
      const apiRes = await fetchWebInitialData(user);
      res.statusCode = 200;
      res.send(JSON.stringify(apiRes));
    }
    res.send('authentication failded');
  } catch (e) {
    throw new Error('Fetch initial data response faild');
  }
};
