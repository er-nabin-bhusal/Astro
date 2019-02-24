import axios from 'axios';
import { UPDATE_MAIN_VALUE } from '../types';

const testData = [{ userId: '1', email: 'nabinbhusal@properclass.com', name: 'Nabin Bhusal', type: 'Admin' }];

export default () => async (dispatch, getState) => {
  try {
    const userRes = await axios.get('http://localhost:4001/app/get-user');
    if (userRes.status === 200) {
      dispatch({
        type: UPDATE_MAIN_VALUE,
        payload: { key: 'userList', value: testData },
      });
    }
  } catch (e) {
    dispatch({
      type: UPDATE_MAIN_VALUE,
      payload: { key: 'userList', value: testData },
    });
  }
};
