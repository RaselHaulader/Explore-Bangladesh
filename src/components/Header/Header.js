import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Header.css'
const Header = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className="header">
                <div className="header-details ms-4">
                    <h1> <span className="explore-font">Explore Beautiful</span>  Bangladesh</h1>
                    <p>Bangladesh is a land of “Natural Beauty”.It is the blessed child of nature.<br />  You can informed from here how much money you need to explore beautiful bangladesh.</p>
                    <h5>Total budget need to explore most popular spot is around 100000 BDT</h5>
                    <div className="float-btn">
                        <button>Learn more..</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;