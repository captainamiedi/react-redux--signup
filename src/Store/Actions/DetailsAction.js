import { PRODUCT_DETAILS, NEW_PRODUCT_DETAILS } from './Constant/types';
import {products} from '../../data';

export const getDetails = () => {
    return (dispatch) => {
        dispatch({
            type: PRODUCT_DETAILS,
            payload: products
        })
    }
}


export const getProductsDetails = (product) => {
    return (dispatch) => {
        dispatch({
            type: NEW_PRODUCT_DETAILS,
            payload: product
        })
    }
}