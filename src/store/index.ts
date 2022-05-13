import {combineReducers, configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import {fbSlice} from '../reducers';
import {FbRootSaga} from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  login: fbSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(FbRootSaga);

export type RootStateType = ReturnType<typeof rootReducer>;
