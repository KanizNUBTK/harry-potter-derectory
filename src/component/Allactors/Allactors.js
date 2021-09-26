import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import './Allactors.css';

const Allactors = (props) => {
    const{name,role,playing,age,cost,img}=props.actor;
    const shoppinCart = <FontAwesomeIcon icon={faShoppingCart} />
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
            <button onClick={()=>{props.handleAddToCart(props.actor)}} className="cart-btn">{shoppinCart}add to cart</button>
        </div>
    );
};

export default Allactors;