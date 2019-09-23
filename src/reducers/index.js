import {combineReducers} from "redux";
import { reducer as formReducer } from 'redux-form'


import {mainReducer} from "./main";
import {cartReducer} from "./cart";

export default combineReducers({
    main:mainReducer,
    cart:cartReducer,
    form:formReducer
})