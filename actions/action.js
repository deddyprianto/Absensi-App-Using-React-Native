/* eslint-disable prettier/prettier */
import {DATA_SUCC, DATA_FAIL} from '../const/const';
import {NAMA_GROUP, NAME_ABSEN} from '../const/contsgroup';
import {DATA_STATUS_USER} from '../const/constStatusUser';
export const actionLogin = userlogin => async dispatch => {
  try {
    dispatch({type: DATA_SUCC, payload: userlogin});
  } catch (error) {
    dispatch({type: DATA_FAIL, err: error});
  }
};
export const actionSaveNameGroup = namegroup => dispatch => {
  dispatch({type: NAMA_GROUP, payload: namegroup});
};

export const actionSaveStatusUser = statusUser => dispatch => {
  dispatch({type: DATA_STATUS_USER, payload: statusUser});
};
