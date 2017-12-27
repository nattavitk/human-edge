export const SET_TRANSACTION = 'SET_TRANSACTION';

export const setTransaction = transaction => ({
  type: SET_TRANSACTION,
  payload: {
    transaction,
  },
});
