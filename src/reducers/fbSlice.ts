import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export type FbAuthType = {
  isAuth: boolean;
  isAuthSuccess: boolean;
  avaImg: string;
};

const initialState: FbAuthType = {
  isAuth: false,
  isAuthSuccess: false,
  avaImg: '',
};

export const fbSlice = createSlice({
  name: 'fb',
  initialState,
  reducers: {
    isAuthProfile: state => {
      state.isAuth = true;
    },
    isAuthProfileSuccess: state => {
      state.isAuthSuccess = true;
    },
    setAvaImg: (state, action: PayloadAction<any>) => {
      state.avaImg = action.payload;
    },
  },
});

export const {setAvaImg, isAuthProfile, isAuthProfileSuccess} = fbSlice.actions;
