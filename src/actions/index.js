import * as authActions from './auth-actions';
import * as valueActions from './value-actions';
import * as transactionActions from './transaction-actions';

const actions = {
  ...authActions,
  ...valueActions,
  ...transactionActions,
};

export default actions;
