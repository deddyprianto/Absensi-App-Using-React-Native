/* eslint-disable prettier/prettier */
import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {loginReducer, saveNameGroup,statusUser} from '../reducer/reduce';

const reducer = combineReducers({
  loginReducer: loginReducer,
  nameGroup: saveNameGroup,
  statusUser: statusUser,
});
// for addMOB
// npm install --save-dev jetifier
// npx jetify
// npx react-native run-android
const store = createStore(reducer, applyMiddleware(thunk));
export default store;
