import React from 'react';
import headerImage from '../../images/headerimg1.jpg'
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <img className="header-img" src={headerImage} alt="" />
            <div className="header-text">
                <h1 >Harry Potter</h1>
                <h4>Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling.</h4>
                <h2>Budget: 250 USD</h2>
            </div>
        </div>
    );
};

export default Header;