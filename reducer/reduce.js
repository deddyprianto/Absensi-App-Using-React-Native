/* eslint-disable prettier/prettier */
import {DATA_SUCC, DATA_FAIL} from '../const/const';
import {NAMA_GROUP, NAME_ABSEN} from '../const/contsgroup';

export const loginReducer = (state = null, action) => {
  switch (action.type) {
    case DATA_SUCC:
      return {...state, dataLogin: action.payload};
    case DATA_FAIL:
      return {error: action.err};
    default:
      return state;
  }
};
export const saveNameGroup = (state = [], action) => {
  switch (action.type) {
    case NAMA_GROUP:
      return {...state, group: action.payload};
    default:
      return state;
  }
};
export const saveNamePathGrouph = (state = [], action) => {
  switch (action.type) {
    case NAME_ABSEN:
      return {...state, path: action.payload};
    default:
      return state;
  }
};
