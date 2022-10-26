import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
const reducers = combineReducers({
    auth: authReducer,
    form: formReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
