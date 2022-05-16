import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export type FbAuthType = {
  isAuthFb: boolean;
  isAuthGoogle: boolean;
  isAuthSuccess: boolean;
  avaImg: string;
};

const initialState: FbAuthType = {
  isAuthFb: false,
  isAuthGoogle: false,
  isAuthSuccess: false,
  avaImg:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTesnspzmYPwsR6SMr-G6x-RYmtjwc_21C_6Q&usqp=CAU',
};

export const fbSlice = createSlice({
  name: 'fb',
  initialState,
  reducers: {
    isAuthFbLogin: state => {
      state.isAuthFb = true;
    },
    isAuthFbLogout: state => {
      state.isAuthFb = false;
      state.avaImg = initialState.avaImg;
    },
    isAuthGoogleLogin: state => {
      state.isAuthGoogle = true;
    },
    isAuthGoogleLogout: state => {
      state.isAuthGoogle = false;
      state.avaImg = initialState.avaImg;
    },
    isAuthProfileSuccess: (state, action: PayloadAction<any>) => {
      state.isAuthSuccess = action.payload;
    },
    setAvaImg: (state, action: PayloadAction<any>) => {
      state.avaImg = action.payload;
    },
  },
});

export const {
  setAvaImg,
  isAuthFbLogin,
  isAuthProfileSuccess,
  isAuthFbLogout,
  isAuthGoogleLogout,
  isAuthGoogleLogin,
} = fbSlice.actions;
