import * as config from '../config';

export const AUTH_LOGIN = 'AUTH_LOGIN';

export const authLogin = authData => ({
  type: AUTH_LOGIN,
  payload: {
    authData,
  },
});
