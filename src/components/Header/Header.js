import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <div className="header-details">
                <h1> <span>Explore Beautiful</span>  Bangladesh</h1>
                <p>You can informed from here how much money you need to explore our beautiful bangladesh.</p>
                <h5>Total budget need to explore most popular spot is around 100000 BDT</h5>
                <div className="float-btn">
                    <button>Learn more..</button>
                </div>
            </div>
        </div>
    );
};

export default Header;