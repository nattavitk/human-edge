import actions from '../actions';

const initialState = {
  auth: {},
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.AUTH_LOGIN:
      return {
        ...state,
        authData: action.payload.authData,
      };
    default: {
      return state;
    }
  }
};

export default authReducer;
export { authReducer };
