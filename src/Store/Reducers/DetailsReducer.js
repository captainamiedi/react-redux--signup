import { PRODUCT_DETAILS, NEW_PRODUCT_DETAILS } from '../Actions/types';

const initialState = {
    products:[],
    detailsProducts: []
}
export default (state = initialState, action)=>{
    switch(action.type){
        case PRODUCT_DETAILS:
            return {
                ...state,
                products: action.payload
            }
        case NEW_PRODUCT_DETAILS:
            return {
                ...state,
                detailsProducts: action.payload
            }
        default:
            return state; 
    }
}