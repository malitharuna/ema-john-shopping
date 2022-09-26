import React from 'react';

const Cart = ({cart}) => {
    return (
        <div className='cart-container'> 
            <h3>This is cart summary</h3>
            <p>Selected Item: {cart.length}</p>
        </div>
    );
};

export default Cart;