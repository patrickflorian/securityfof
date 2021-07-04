import { applyMiddleware, createStore, compose, StoreEnhancer } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
// import { createLogger } from 'redux-logger';

import rootReducer from './reducers';

// const loggerMiddleware = createLogger();

export default function configureStore(preloadedState = {}) {
  const middlewares = [thunkMiddleware]; // loggerMiddleware
  const middlewareEnhancer = composeWithDevTools(
    applyMiddleware(...middlewares)
  );

  const enhancers = [middlewareEnhancer];
  const composedEnhancers :StoreEnhancer<any, any> = compose(...enhancers);

  return createStore(rootReducer, preloadedState, composedEnhancers);
}