export const LOAD_PRODUCTS_START = 'REDUX_SAGA_LOAD_PRODUCT_START';
export const LOAD_PRODUCTS_SUCCESS = 'REDUX_SAGA_LOAD_PRODUCT_SUCCESS';
export const LOAD_PRODUCTS_ERROR = 'REDUX_SAGA_LOAD_PRODUCT_ERROR';


export const loadProducts = (payload) => {
    payload.count = 36;
    return {type:LOAD_PRODUCTS_START,payload:payload}
}