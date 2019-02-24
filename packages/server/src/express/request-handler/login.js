import login from '../../auth/login';

export default async (req, res) => {
  try {
    const record = req.body;
    // console.log('login route called', record);
    const status = await login(record);
    res.send(status);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
