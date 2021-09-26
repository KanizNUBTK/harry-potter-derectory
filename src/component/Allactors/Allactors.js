import React from 'react';
import './Allactors.css';

const Allactors = (props) => {
    const{name,role,playing,age,cost,img}=props.actor;
    return (
        <div className="all-actors">
            <div className="img-div">
                <img src={img} alt="" />
            </div>
            <div className="actor-details">
                <h3>Name:{name}</h3>
                <h4>Role:{role}</h4>
                <h4>Playing:{playing}</h4>
                <h4>Age:{age}</h4>
                <h4>Cost for acting:{cost}$</h4>
            </div>
            <button onClick={()=>{props.handleAddToCart(props.actor)}} className="cart-btn">add to cart</button>
        </div>
    );
};

export default Allactors;