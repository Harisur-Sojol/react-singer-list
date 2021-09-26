import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Singer from '../Singer/Singer';
import './Singers.css';

const Singers = () => {

    const [singers, setSingers]= useState([])
    const [cart, setCart] = useState([])

    useEffect( () => {
        fetch('./data.JSON')
        .then(res => res.json())
        .then(data => setSingers(data))
    }, [])

    const handleCartButton = (singer)=> {
       const newCart  = [...cart, singer]
       setCart(newCart)
    }

    return (
        <div className="ms-5 mb-5">
            <div className="row">
                <div className="col-md-9 all-singers">
                    <div className="row">
                        {
                            singers.map(singer => <Singer 
                                key={singer.key} 
                                singer={singer}
                                handleCartButton={handleCartButton}
                                ></Singer>)
                        }   
                    </div>
                </div>
                <div className="col-md-3">
                        {
                            <Cart cart={cart}></Cart>
                        }
                </div>
            </div>
        </div>
    );
};

export default Singers;