import { combineReducers } from 'redux';

import authReducer from './auth-reducers';
import valueReducer from './value-reducers';
import transactionReducer from './transaction-reducers';

const rootReducer = combineReducers({
  auth: authReducer,
  value: valueReducer,
  transaction: transactionReducer,
});

export default rootReducer;
