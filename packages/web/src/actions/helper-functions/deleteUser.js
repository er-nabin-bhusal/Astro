import axios from 'axios';
import { UPDATE_MAIN_VALUE } from '../types';

const deleteUser = (getState, userId) => getState.main.userList.filter(data => data.userId !== userId);

export default userId => async (dispatch, getState) => {
  try {
    const userRes = await axios.get(`http://localhost:4001/app/get-user?id=${userId}`);
    if (userRes.status === 200) {
      dispatch({
        type: UPDATE_MAIN_VALUE,
        payload: { key: 'userList', value: deleteUser(getState(), userId) },
      });
    }
  } catch (e) {
    dispatch({
      type: UPDATE_MAIN_VALUE,
      payload: { key: 'userList', value: deleteUser(getState(), userId) },
    });
  }
};
