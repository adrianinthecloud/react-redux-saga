import { put, takeLatest, all } from 'redux-saga/effects';

import { LOAD_PRODUCTS_START, LOAD_PRODUCTS_SUCCESS, LOAD_PRODUCTS_ERROR } from '../actions';
import Api from '../api';

async function fetchAsync(func, payload) {
    const response = await func(payload);

    if (response.ok) {
        return await response.json();
    }

    throw new Error("Failed to fetch products.");
}

function * fetchProducts(action) {
    try {
        const json = yield fetchAsync(Api.fetchProducts, action.payload);

        yield put({type:LOAD_PRODUCTS_SUCCESS, json});
    } catch (e) {
        yield put({type:LOAD_PRODUCTS_ERROR, error: e.message});
    }
}

function * actionWatcher() {
    const action = yield takeLatest(LOAD_PRODUCTS_START, fetchProducts)
}


export default function * rootSaga() {
    yield all([
        actionWatcher()
    ]);
}