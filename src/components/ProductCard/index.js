import React from 'react';
import {Link} from "react-router-dom";

const ProductCart = ({productPhoto,description,price,id,clickHandler,cartArray,className,...rest}) => {
    const inCart = cartArray ? cartArray.find(el => el.id === id) : null;
    return (
        <div className={className}>
            <img src={productPhoto} alt='Oops'/>
            <div>
                <h2>{description}</h2>
                <h2>{price}$</h2>
                {inCart ?
                    <Link to='/cart'>Go To Cart</Link> :
                    <button id={id} onClick={clickHandler} >{cartArray ? 'Add To cart' : 'X'}</button>
                }
            </div>
        </div>
    );
};

export default ProductCart;