import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';

export default combineReducers({
    auth: authReducer,
    form: formReducer // redux-form requires this key name "form"
});