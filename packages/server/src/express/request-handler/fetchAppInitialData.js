import { fetchInitialData } from '../../api';

export default async (req, res) => {
  console.log('fetchIntial data called', req.query);
  const result = await fetchInitialData(req.query);
  res.send(JSON.stringify(result));
};
