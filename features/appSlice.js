/* eslint-disable prettier/prettier */
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  dataLogin: {},
  statusUser: {},
  nameGroup: {},
  keadaanHadir: {keadaanHadir: false},
  keadaanSakit: {keadaanSakit: false},
  keadaanIzin: {keadaanIzin: false},
  keadaanAlpha: {keadaanAlpha: false},
};
export const appSlice = createSlice({
  name: 'appstate',
  initialState,
  reducers: {
    actionLogin: (state, action) => {
      state.dataLogin = action.payload;
    },
    saveStatusUser: (state, action) => {
      state.statusUser = action.payload;
    },
    saveNameGroup: (state, action) => {
      state.nameGroup = action.payload;
    },
    actionStatusHadir: (state, action) => {
      state.keadaanHadir = action.payload;
    },
    actionStatusSakit: (state, action) => {
      state.keadaanSakit = action.payload;
    },
    actionstatusIzin: (state, action) => {
      state.keadaanIzin = action.payload;
    },
    actionStatusAlpha: (state, action) => {
      state.keadaanAlpha = action.payload;
    },
  },
});
export const {
  actionLogin,
  saveStatusUser,
  saveNameGroup,
  actionStatusHadir,
  actionStatusSakit,
  actionStatusIzin,
  actionStatusAlpha,
} = appSlice.actions;
export default appSlice.reducer;
