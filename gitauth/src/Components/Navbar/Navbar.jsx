import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom';

const Navbar = (props) => {


    return (
        <nav className={`navbar navbar-expand-lg ${props.darkMode ? 'navbar-dark bg-dark' : 'navbar-success bg-success'}`}>
            <div className="container">
                <Link className="navbar-brand ">GITHUB</Link>


                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" id="darkModeToggle" onChange={props.handleModeToggle} />
                    <label className="form-check-label" htmlFor="darkModeToggle">Dark Mode</label>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
