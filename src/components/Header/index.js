import React from "react"
import {NavLink,Link} from 'react-router-dom'

const links = [
    {
        id:1,
        name:'Login',
        path:'/login',
        className:'header-link'
    },
    {
        id:2,
        name:'Market',
        path:'/market',
        className:'header-link'
    },
    {
        id:3,
        name:'Cart',
        path:'/cart',
        className:'header-link',
        counter:true
    }
];

export default class Header extends React.Component {

    logOut = () => {
        this.props.clearData();
    };

    render() {
        const {user,cartArray} = this.props;
        return (
            <header>
                {links.map(el => el.counter ?
                    <div className='header-link-cart-container' key={el.id}>
                        <NavLink
                            exact to={el.path}
                            activeClassName='header-link-active'
                            key={el.id}
                            className={el.className}
                        >{el.name}
                        </NavLink>
                        <div className='header-cart-counter'>{cartArray.length}</div>
                    </div> :
                    <div className='header-link-container' key={el.id}>
                        <NavLink
                            exact to={el.path}
                            activeClassName='header-link-active'
                            key={el.id}
                            className={el.className}
                        >{el.name}
                        </NavLink>
                    </div>
                )}
                {user ? <Link to='/login' className='header-link' onClick={this.logOut}>Log Out</Link> : null}
            </header>
        );
    }
}
