import { combineReducers } from 'redux';
import products from './product_reducers';

const rootReducer = combineReducers({
    products
})

export default rootReducer;