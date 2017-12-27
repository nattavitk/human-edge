import actions from '../actions';

const initialState = {
  isLoading: false,
};

const valueReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_IS_LOADING: {
      return {
        ...state,
        isLoading: action.payload.toggle,
      };
    }
    default: {
      return state;
    }
  }
};

export default valueReducer;
export { valueReducer };
