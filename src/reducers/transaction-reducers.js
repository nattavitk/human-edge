import actions from '../actions';

const initialState = {
  transaction: {},
};

const transactionReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_TRANSACTION:
      return {
        ...state,
        transaction: action.payload.transaction,
      };
    default:
      return state;
  }
};

export default transactionReducer;
export { transactionReducer };
