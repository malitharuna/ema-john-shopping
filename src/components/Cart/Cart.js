import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;
    // console.log(cart);

    let total = 0;
    let shipping = 0;
    let quantity =0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        total= total + product.price * product.quantity;
        shipping = shipping + product.shipping ;
    }

    const tax = (total * 10/100).toFixed(2);
    const grandTotal = (total + shipping + parseFloat(tax)).toFixed(2);

    return (
        <div className='cart'> 
            <h3>This is cart summary</h3>
            <p>Selected Item: {quantity}</p>
            <p>Total Price : ${total}</p>
            <p>Total Shipping: ${shipping}</p>
            <p>Tax: ${tax} </p>
            <p>Grand Total:${grandTotal} </p>
        </div>
    );
};

export default Cart;