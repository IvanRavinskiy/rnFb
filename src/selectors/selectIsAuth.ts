import {RootStateType} from '../store';

export const selectIsAuth = (state: RootStateType) => state.login.isAuth;
