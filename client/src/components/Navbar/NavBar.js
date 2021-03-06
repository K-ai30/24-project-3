import React from "react";
import './style.css';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar navbar-expand-lg navbar-light custom-shade">
            <h3>DataTrak</h3>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <button><Link style={{ textDecoration: 'none' }} to="/dashboard">Home</Link></button>
            <button><Link style={{ textDecoration: 'none' }} to="/events">Add Event</Link></button>
            <button><Link style={{ textDecoration: 'none' }} to="/register">Add Resident</Link></button>
            <button><Link style={{ textDecoration: 'none' }} to="/reports">Reports</Link></button>
            <button><Link style={{ textDecoration: 'none' }} to="/charthistory">History</Link></button>
            </div>
        </div>
    )
}


export default Navbar;