import React from "react"
import {connect} from "react-redux"
import {Link} from "react-router-dom"
import ProductCard from "../ProductCard"
import {deleteProductFromCart} from "../../actions";

class Cart extends React.Component {

    deleteProduct = (e) => {
        this.props.deleteProductFromCart(e.target)
    };

    render() {
        const {cartArray} = this.props;
        return (
            <>
                {cartArray.length === 0 ?
                    <div className='cart-container-empty'>
                        <p>Nothing added to cart</p>
                        <p>add some at</p>
                        <Link to="/market">Market</Link>
                    </div> :

                    <div className='cart-container'>
                        {cartArray.map(el =><ProductCard key={el.id} {...el} clickHandler={this.deleteProduct} className={'cart-card'}/>)}
                    </div>
                }
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        cartArray: state.cart.cartArray
    }
};

const mapDispatchToProps = {
    deleteProductFromCart
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart)