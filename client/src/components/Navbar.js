import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUtensils, FaSignOutAlt } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('user'));

    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate('/login');
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <FaUtensils className="navbar-icon" /> AirMeals
            </div>
            <ul className="navbar-links">
                {user ? (
                    <>
                        <li className="navbar-user">Welcome, {user.username}</li>
                        <li>
                            <button onClick={handleLogout} className="logout-button">
                                <FaSignOutAlt className="logout-icon" /> Logout
                            </button>
                        </li>
                    </>
                ) : (
                    <li><Link to="/login">Login</Link></li>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;