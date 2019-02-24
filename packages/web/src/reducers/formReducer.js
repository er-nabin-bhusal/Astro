import { UPDATE_FORM_VALUE } from '../actions/types';

const initialFormState = {
  login: {
    userName: '', password: '', error: null, success: null, loading: null,
  },
  addUser: {
    userId: '', userName: '', password: '', name: '', type: '', success: null, loading: null, error: null,
  },
};

export default (state = initialFormState, action) => {
  // console.log('form reducer called', action);
  switch (action.type) {
    case UPDATE_FORM_VALUE:
      return {
        ...state,
        [action.payload.schema]: {
          ...state[action.payload.schema], ...action.payload.data,
        },
      };
    default:
      return state;
  }
};
