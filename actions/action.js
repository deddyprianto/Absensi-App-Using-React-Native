/* eslint-disable prettier/prettier */
import {DATA_SUCC, DATA_FAIL} from '../const/const';
import {NAMA_GROUP, PATH_GROUP} from '../const/contsgroup';

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
export const actionsPathNameGroup = pathgroup => dispatch => {
  dispatch({type: PATH_GROUP, payload: pathgroup});
};
