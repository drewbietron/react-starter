import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import sitesReducers from './reducers/index.js';

function configureStore(preloadedState) {
  return createStore(sitesReducers,
                     preloadedState,
                     compose(applyMiddleware(thunkMiddleware),
                             window.devToolsExtension ? window.devToolsExtension() : f => f));
}

const store = configureStore();
export default store;
