import React from 'react';
import './Member.css';

const Member = (props) => {
    const {member} = props;
    let total = 0;
    let name;
    for(const actor of member){
        total = total + actor.cost;
        name = actor.name;
    }
    return (
        <div className="add-member">
            <h1>Select Total Actors:{props.member.length}</h1>
            <h2>Total Cost:{total}</h2>
            <ol>
                {member.map(name =>{return <li>{name.name}</li>})}
            </ol>
        </div>
    );
};

export default Member;