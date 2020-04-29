import React from "react";
import './style.css';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar navbar-expand-lg navbar-light custom-shade">
            <h3>DataTrak</h3>
            <div className="collapse navbar-collapse" id="navbarNav">
            <button><Link to="/register">Home</Link></button>
            <button><Link to="/register">Events</Link></button>
            <button><Link to="/register">Residents</Link></button>
            <button><Link to="/register">Reports</Link></button>
            </div>
        </div>
    )
}


export default Navbar;