import { combineReducers } from 'redux';
import Client from './client';
import PersonalInformation from './personalInformation.js'

export default combineReducers({
    Client,
    PersonalInformation
});