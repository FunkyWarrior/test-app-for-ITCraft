import * as types from "../actionTypes"


const clearUser = () => ({
    type: types.CLEAR_USER
});

const clearCart = () => ({
    type: types.CLEAR_CART,
});

export const clearData = () => {
    return dispatch => {
        dispatch(clearUser());
        dispatch(clearCart());
        localStorage.removeItem('user');
        localStorage.removeItem('cart')
    }
};

export const loginUser = payload => {
    localStorage.setItem('user', JSON.stringify(payload));
    return ({
        type: types.LOGIN_USER,
        payload
    })
};

const addProduct = payload => ({
    type: types.ADD_PRODUCT_TO_CART,
    payload
});

const deleteProduct = payload => ({
    type: types.DELETE_PRODUCT_FROM_CART,
    payload
});

export const addProductToCart = payload => {
    return async (dispatch,getState) => {
        dispatch(addProduct(payload));
        const {cartArray} = getState().cart;
        await localStorage.setItem('cart',JSON.stringify(cartArray))
    }
};

export const deleteProductFromCart = payload => {
    return async (dispatch,getState) => {
        dispatch(deleteProduct(payload));
        const {cartArray} = getState().cart;
        await localStorage.setItem('cart',JSON.stringify(cartArray))
    }
};




