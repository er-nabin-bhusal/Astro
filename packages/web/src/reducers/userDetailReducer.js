import { UPDATE_USER_DETAIL } from '../actions/types';

const initialAppState = {
  trans: {},
};

export default (state = initialAppState, action) => {
  switch (action.type) {
    case UPDATE_USER_DETAIL:
      return { ...state, [action.payload.key]: action.payload.value };
    default:
      return state;
  }
};
