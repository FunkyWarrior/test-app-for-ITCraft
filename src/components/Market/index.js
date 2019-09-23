import React from "react"
import {connect} from "react-redux";
import {addProductToCart} from "../../actions"
import ProductCard from "../ProductCard";


class Market extends React.Component {

    addToCart = (e) => {
        this.props.addProductToCart({item:e.target,products:this.props.products})
    };

    render() {
        const {products,cartArray} = this.props;
        return (
            <div className='market-container'>
                {products.map(el =>
                    <ProductCard key={el.id} {...el} clickHandler={this.addToCart} cartArray={cartArray} className={'market-card'}/>
                )}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        products: state.main.products,
        cartArray: state.cart.cartArray
    }
};

const mapDispatchToProps = {
    addProductToCart
};

export default connect(mapStateToProps, mapDispatchToProps)(Market)