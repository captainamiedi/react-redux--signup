import { PRODUCT_DETAILS, NEW_PRODUCT_DETAILS } from './types';
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