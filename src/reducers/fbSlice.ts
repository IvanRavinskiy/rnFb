import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export type FbAuthType = {
  isAuth: boolean;
  avaImg: string;
};

const initialState: FbAuthType = {
  isAuth: false,
  avaImg: '',
};

export const fbSlice = createSlice({
  name: 'fb',
  initialState,
  reducers: {
    isAuthProfile: state => {
      state.isAuth = true;
    },
    setAvaImg: (state, action: PayloadAction<string>) => {
      state.avaImg = action.payload;
    },
  },
});

export const {setAvaImg, isAuthProfile} = fbSlice.actions;
