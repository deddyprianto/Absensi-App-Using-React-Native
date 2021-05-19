/* eslint-disable prettier/prettier */
import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {
  loginReducer,
  saveNameGroup,
  saveNamePathGrouph,
} from '../reducer/reduce';
const reducer = combineReducers({
  loginReducer: loginReducer,
  nameGroup: saveNameGroup,
  pathGroup: saveNamePathGrouph,
});
const store = createStore(reducer, applyMiddleware(thunk));
export default store;
