import * as types from "../actionTypes"


const defaultState = {
    cartArray:localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [],
    totalSum:0
};

export const cartReducer = (state = defaultState, action) => {
    switch(action.type){

        case types.CLEAR_CART : {
            return {
                ...state,
                cartArray: []
            };
        }

        case types.ADD_PRODUCT_TO_CART : {
            const productItem = action.payload.products.find(el => el.id === +action.payload.item.id);
            return {
                ...state,
                cartArray: productItem ?
                    [...state.cartArray,productItem] :
                    state.cartArray,
                totalSum: state.totalSum + productItem.price
            };
        }

        case types.DELETE_PRODUCT_FROM_CART : {
            const newCartArray = [...state.cartArray];
            const productItem = newCartArray.find(el => el.id === +action.payload.id);
            newCartArray.splice(newCartArray.indexOf(productItem),1);
            return {
                ...state,
                cartArray: newCartArray,
                totalSum: state.totalSum - productItem.price
            };
        }


        default:
            return state
    }
};