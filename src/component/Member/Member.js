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
            <h2>Select Total Actors:{props.member.length}</h2>
            <h3>The total cost rate for the actors:{total}$</h3>
            <ol>
                {member.map(name =>{return <li>{name.name}</li>})}
            </ol>
        </div>
    );
};

export default Member;