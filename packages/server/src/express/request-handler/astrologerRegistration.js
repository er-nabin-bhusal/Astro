import { addAstrologer } from '../../api';
import { genHashPassword } from '../../auth/passwordHandler';

export default async (req, res) => {
  // console.log('userRegisteration handler called', req.body);
  try {
    const { password } = req.body;
    const hasPassword = await genHashPassword(password);
    const respose = await addAstrologer({ ...req.body, password: hasPassword });
    // console.log('response of add user', respose);
    if (respose) {
      res.statusCode = 200;
      res.send(JSON.stringify(respose));
    }
  } catch (e) {
    // console.log('error in user registration', e);
    throw e;
  }
};
