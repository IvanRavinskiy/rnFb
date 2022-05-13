import {combineReducers, configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import {fbSlice} from './reducers';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  app: fbSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

export type RootStateType = ReturnType<typeof rootReducer>;
