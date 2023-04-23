import React from 'react';
// eslint-disable-next-line no-unused-vars
import nav from './NavBar.css';

export const NavBar = () => {
    return(
        <nav>
            <ul className="nav justify-content-end col-9">
                <li className="nav-item">
                    <a className="nav-link" href="/">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/src/components/about/About">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Contact</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Time Table</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Live Location</a>
                </li>
            </ul>
        </nav>
    )
}




export default NavBar;