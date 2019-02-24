import axios from 'axios';
import EmailValidator from 'email-validator';
import check from 'check-types';
import { updateFormValue } from '../index';

export default async (dispatch, getState, schema) => {
  dispatch(updateFormValue(schema, { loading: true }));
  const { form } = getState();
  const { userName, password, name, type } = form.addUser;
  try {
    if (userName !== '' && password !== '' && name !== '' && type !== '') {
      if (EmailValidator.validate(userName)) {
        const res = await axios.post('http://localhost:4001/auth/astrologerRegistration', { userName, password, name, type });
        const { data } = res;
        if (res.status === 200 && check.number(data)) {
          dispatch(updateFormValue(schema, { loading: false, error: null, success: 'User registered successfully', userName: '', password: '', type: null, name: '' }));
        } else {
          dispatch(updateFormValue(schema, { loading: false, error: 'Registration failed' }));
        }
      } else {
        dispatch(updateFormValue(schema, { loading: false, error: 'Invalid Email address' }));
      }
    } else {
      dispatch(updateFormValue(schema, { loading: false, error: 'Fill all the fields ' }));
    }
  } catch {
    dispatch(updateFormValue(schema, { loading: false, error: 'Invalid username/password' }));
  }
  // console.log(res);
};
