import axios from 'axios';
import { UPDATE_MAIN_VALUE, UPDATE_USER_DETAIL } from './types';

export const updateMainValue = (key, value) => async dispatch => dispatch(
  {
    type: UPDATE_MAIN_VALUE,
    payload: { key, value },
  }
);


export const updateUserDetails = (key, value) => async dispatch => dispatch(
  {
    type: UPDATE_USER_DETAIL,
    payload: { key, value },
  }
);

export const fetchInitialWebData = () => async (dispatch, getState) => {
  const { pendingQuestion } = getState().main;
  const token = sessionStorage.getItem('SESSION_ID');
  if (!pendingQuestion && token) {
    const resData = await axios.get(`http://localhost:4001/web/fetch-initial-data?token=${token}`);
    if (resData.status === 200) {
      dispatch({ type: UPDATE_MAIN_VALUE, payload: { key: 'pendingQuestion', value: resData.data.pendingQuestion } });
    }
  }
};
