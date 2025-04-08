import { createStore, combineReducers, applyMiddleware } from 'redux';
import  { thunk } from 'redux-thunk';
import { taskReducer } from './Reducer/taskReducer';
import authReducer from './Reducer/authReducer';

const rootReducer = combineReducers({
  tasks: taskReducer,
  auth: authReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
