import * as config from '../config';

export const SET_IS_LOADING = 'SET_IS_LOADING';

export const setIsLoading = toggle => ({
  type: SET_IS_LOADING,
  payload: {
    toggle,
  },
});
