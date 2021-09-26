import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, } from '@fortawesome/free-solid-svg-icons'

import "./singer.css";

const Singer = (props) => {
  const { name, role, img, salary, country, age } = props.singer;
  const shoppingcart = <FontAwesomeIcon icon={faShoppingCart} />
  return (
    <div className="col-md-4 gy-4">
      <div className="card h-100">
            <img className="singer-img"  src={img} alt="" />
            <div className="card-body text-center">
                <h5><span className="singer-details">Name: </span> <span className="singer-details2">{name}</span></h5>
                <h5><span className="singer-details">Role:</span> <span className="singer-details2">{role}</span></h5>
                <h5><span className="singer-details">Salary:</span> <span className="text-warning fw-bold fs-5">$</span> <span className="singer-details2">{salary}</span></h5>
                <h5><span className="singer-details">Country:</span> <span className="singer-details2">{country}</span></h5>
                <h5><span className="singer-details">Age:</span> <span className="singer-details2">{age}</span></h5>
            </div>
            <div className = "mx-auto m-3">
                <button className="cart-btn" onClick={ ()=> props.handleCartButton(props.singer)}>{shoppingcart} Add To Cart</button>
            </div>
            <div>

            </div>
      </div>
    </div>
  );
};

export default Singer;