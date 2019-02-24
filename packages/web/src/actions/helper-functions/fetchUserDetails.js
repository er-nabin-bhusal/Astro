import axios from 'axios';
import { UPDATE_USER_DETAIL } from '../types';

const testData = {
  userDetails: [{
    firstName: 'Nabin',
    country: 'Nepal',
    city: 'Kathmandu',
    dob: '2054-09-09',
    registrationToken: 'abc23434jjadljf',
    image: 'DFASFASFD.JPG',
    time: '4:34AM',
    accurateTime: '5:45AM',
    gender: 'Male',
    state: 'state 3',
  }],
  ansQsn: {
    questionId: '1',
    question: 'This is first Question',
    modQuestion: null,
    astroAnswer: null,
    modAnswer: null,
  },
};

export default userId => async (dispatch, getState) => {
  const token = sessionStorage.getItem('SESSION_ID');
  try {
    const userRes = await axios.get(`http://localhost:4001/web/fetch-user-detail?token=${token}&registrationToken=${userId}`);
    if (userRes.status === 200) {
      dispatch({
        type: UPDATE_USER_DETAIL,
        payload: { key: 'trans', value: testData },
      });
    }
  } catch (e) {
    dispatch({
      type: UPDATE_USER_DETAIL,
      payload: { key: 'trans', value: testData },
    });
  }
};
