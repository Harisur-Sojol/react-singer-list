import React from 'react';
import "./Cart.css"
const Cart = (props) => {
    const {cart} =props
    let total = 0;
    for(const item of cart){
        total += item.salary;
    }
    return (
        <div className="singers-count text-center">
            <h5>Players added: {props.cart.length}</h5>
            
            <h6>Total Cost: <span className="text-warning fw-bold fs-5">$</span> {total}</h6>
        {
            props.cart.map(singleCart => <li>{singleCart.name}</li>)
        }
       <button className="btn">Buy Now</button>
        </div>
        
    );
};

export default Cart;