import { UPDATE_MAIN_VALUE } from '../actions/types';

const initialAppState = {
  ansqsn: [],
  screen: 'login',
  modal: false,
  currentAdminContent: 'addUser',
  pendingQuestion: null,
};

export default (state = initialAppState, action) => {
  switch (action.type) {
    case UPDATE_MAIN_VALUE:
      return { ...state, [action.payload.key]: action.payload.value };
    default:
      return state;
  }
};
