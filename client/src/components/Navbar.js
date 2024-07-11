import React from 'react';
import { Link } from 'react-router-dom';
import { FaUtensils } from 'react-icons/fa'; // Import an icon from react-icons
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <FaUtensils className="navbar-icon" /> AirMeals
            </div>
            <ul className="navbar-links">
                <li><Link to="/login">Login</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;