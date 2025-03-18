// src/components/Navbar.js
import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './Navbar.css';
import Register from './Register';
import Login from './Login';

const Navbar = () => {
    return (
        <>
            <nav className="navbar">
                <div className="navbar-logo">Skincare</div>
                <div className="navbar-links">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/about" className="nav-link">About Us</Link>
                    <Link to="/services" className="nav-link">Services</Link>
                    <Link to="/contact" className="nav-link">Contact Us</Link>
                    <Link to="/register" className="nav-link">Register</Link>
                </div>
                <div className="navbar-login">
                    <Link to="/login" className="login-button">Login</Link>
                </div>
            </nav>
            <Routes>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </>
    );
};

export default Navbar;