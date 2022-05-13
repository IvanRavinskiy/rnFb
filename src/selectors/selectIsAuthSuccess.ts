import {RootStateType} from '../store';

export const selectIsAuthSuccess = (state: RootStateType) =>
  state.login.isAuthSuccess;
