import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import streamReducer from './streamReducer';
const reducers = combineReducers({
    streams: streamReducer, 
    auth: authReducer,
    form: formReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
