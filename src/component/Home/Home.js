import React, { useEffect, useState } from 'react';
import Allactors from '../Allactors/Allactors';
import Member from '../Member/Member';
import './Home.css';

const Home = () => {
    const [actors,setactor] = useState([]);
    const [member, setAddedmenber] = useState([]);
    useEffect(()=>{
        fetch('./fakedata.JSON')
        .then(res=>res.json())
        .then(data=>setactor(data));
    },[])
    const handleAddToCart = actor =>{
        const newMeber = [...member,actor];
        setAddedmenber(newMeber);
    }

    return (
        <div>
            <div className="actor-container">
                <div className="user-container">
                    {
                        actors.map(actor =><Allactors 
                            key={actor.key}
                            actor={actor}
                            handleAddToCart={handleAddToCart}
                            >
                            </Allactors>)
                    }
                </div>
                <div className="select-user">
                    <Member member = {member}></Member>
                </div>
            </div>
            
        </div>
    );
};

export default Home;