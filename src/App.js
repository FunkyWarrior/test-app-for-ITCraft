import React from 'react';
import {connect} from 'react-redux';
import {clearData} from './actions'
import {Switch, Route, Redirect} from "react-router-dom";

import Header from "./components/Header"
import Market from "./components/Market"
import Cart from "./components/Cart"
import Login from "./components/Login"

const routes = [
    {
        id: 1,
        path: "/login",
        component: Login
    },
    {
        id: 2,
        path: "/market",
        component: Market
    },
    {
        id: 3,
        path: "/cart",
        component: Cart
    }
];


class App extends React.Component {

    render() {
        const {user, cartArray, clearData} = this.props;
        return (
            <main>
                <Header user={user} cartArray={cartArray} clearData={clearData}/>
                <div className="container">
                    <Switch>
                        {routes.map(el =>
                            <Route
                                exact path={el.path}
                                key={el.id}
                                component={el.component}
                            />
                        )}
                        <Redirect exact from='/' to='/login'/>
                    </Switch>
                </div>
            </main>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.main.user,
        cartArray: state.cart.cartArray,
    }
};

const mapDispatchToProps = {
    clearData
};

export default connect(mapStateToProps, mapDispatchToProps)(App)
