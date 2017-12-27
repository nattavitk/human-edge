import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import createHelpers from '../utils/createHelpers';
import rootReducer from '../reducers';

let composeEnhancers = compose;

if (__DEV__) {
  composeEnhancers =
    window.window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const enhancer = composeEnhancers(
  applyMiddleware(thunk.withExtraArgument(createHelpers()))
  // other store enhancers if any
);

const configureStore = () => {
  return createStore(rootReducer, enhancer);
};

export default configureStore;
