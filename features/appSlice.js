/* eslint-disable prettier/prettier */
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  dataLogin: {},
  statusUser: {},
  nameGroup: {},
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
  },
});
export const {actionLogin, saveStatusUser, saveNameGroup} = appSlice.actions;
export default appSlice.reducer;
