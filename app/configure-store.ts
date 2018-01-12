import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

import reducers from './reducers/index';
import { IReduxStore } from './models/redux-store';

const preloadedState: Partial<IReduxStore> = {};

const store: any = createStore(
  reducers,
  preloadedState,
  compose(
    applyMiddleware(thunkMiddleware),
    (<any>window).devToolsExtension && process.env.DEV_ENV
      ? (<any>window).devToolsExtension()
      : f => f
  )
);

export function getState(): IReduxStore {
  return <IReduxStore>store.getState();
}

export default store;
