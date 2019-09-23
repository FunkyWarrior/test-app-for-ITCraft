import {CLEAR_USER,LOGIN_USER}  from "../actionTypes"
import {productsList} from "../utils/formFields/products"


const defaultState = {
    user: localStorage.getItem('user'),
    products: productsList,
};

export const mainReducer = (state = defaultState, action) => {
    switch(action.type){

        case CLEAR_USER : {
            return {
                ...state,
                user: null,
            };
        }

        case LOGIN_USER : {

            return {
                ...state,
                user: action.payload
            };
        }


        default:
            return state
    }
};