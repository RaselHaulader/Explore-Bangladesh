import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light p-0 m-0">
            <div className="container-fluid ">
                <a className="navbar-brand m-0 py-0" href="./"><span>Explore <span> BD </span></span></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="./">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="./">Spot</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="./">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="./">Contact</a>
                        </li>
                      </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;