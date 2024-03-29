import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import {store} from './store'
import {Provider} from "react-redux";

import "./style/App.css"
import "./style/Header.css"
import "./style/Market.css"
import "./style/Cart.css"
import "./style/Login.css"

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
serviceWorker.unregister();
