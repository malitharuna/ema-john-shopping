import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'

const Product = ({product, handleAddToCart}) => {
    // console.log(props.product);
    // const {product, handleAddToCart} = props; // props hishebe handleAddToCart k pathano hoyece
    const {img, name, price, ratings, seller}  = product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
            <h2 className='product-name'>{name}</h2>
            <h4>Price: ${price}</h4>
            <p><small>Manufacturer: {seller}</small></p>
            <p><small>Ratings: {ratings} stars</small></p>
            </div>
            <button onClick={()=>handleAddToCart(product)} className='btn-cart' >
                <p >Add To Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
            
        </div>
    );
};

export default Product;