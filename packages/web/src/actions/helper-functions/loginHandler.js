import axios from 'axios';
import { updateFormValue } from '../index';
import { updateMainValue } from '../updateMainValue';

export default async (dispatch, getState, schema) => {
  dispatch(updateFormValue(schema, { loading: true }));
  const { form } = getState();
  const { userName, password } = form.login;
  try {
    const res = await axios.post('http://localhost:4001/auth/login', { userName, password });
    const { data } = res;
    if (res.status === 200 && data.token) {
      dispatch(updateFormValue(schema, { loading: false, error: null, success: true, userName: '', password: '' }));
      sessionStorage.setItem('USER_ID', data.id);
      sessionStorage.setItem('SESSION_ID', data.token);
      sessionStorage.setItem('USER_NAME', data.name);
      sessionStorage.setItem('USER_TYPE', data.type);
      dispatch(updateMainValue('screen', data.type));
      dispatch(updateMainValue('pendingQuestion', data.pendingQuestion));
    }
  } catch {
    dispatch(updateFormValue(schema, { loading: false, error: 'Invalid username/password' }));
  }
  // console.log(res);
};
