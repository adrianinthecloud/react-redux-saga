import { LOAD_PRODUCTS_START, LOAD_PRODUCTS_SUCCESS, LOAD_PRODUCTS_ERROR } from '../actions';

export default function(state={}, action){
    switch(action.type){
        case LOAD_PRODUCTS_START:
            return {...state, loading:true};
        case LOAD_PRODUCTS_SUCCESS:
            return {...state, productList:action.json.productList, loading:false};
        case LOAD_PRODUCTS_ERROR:
            return {...state, error:action.error, loading:false};
        default:
            return state
    }
}