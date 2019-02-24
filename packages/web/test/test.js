
const mainFuction = () => {
  const state = {
    login: { username: 'null', password: null, loading: false, success: false },
    // addUser: { userName: '', password: '', experience: null },
  };
  const action = { type: 'update_form_value', schema: 'login', data: { username: 'bhagya', password: 'sah' } };
  const newState = { ...state, [action.schema]: { ...state[action.schema], ...action.data } };
  console.log(newState);
};
mainFuction();
