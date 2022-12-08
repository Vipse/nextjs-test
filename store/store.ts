import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { baseApi } from './api/base';


const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
});

export const makeStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(
        baseApi.middleware,
      ),
    devTools: false,
    preloadedState: {}
  });
