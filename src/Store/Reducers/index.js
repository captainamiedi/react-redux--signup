import { combineReducers } from 'redux';
import details from './DetailsReducer';
import {reducer as toastrReducer} from 'react-redux-toastr'
// import registration from './RegistrationReducer';
import {authentication} from './AuthReducer';
import { registration } from './RegistrationReducer';


export default combineReducers({ 
    productDetails: details,
    registration,
    authentication,
    toastr: toastrReducer
});