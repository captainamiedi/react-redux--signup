import { combineReducers } from 'redux';
import details from './DetailsReducer'

export default combineReducers({ 
    productDetails: details
});