import React from "react"
import './header.css';
import shelfieIcon from '../../media/shelfie_icon.png';
import { NavLink } from 'react-router-dom';

export default function Header(props)  {
    return (
        <div className="header">
            <img alt="Shelfie Logo" src={shelfieIcon}/>
            <h1>SHELFIE</h1>
            <NavLink to="/">Dashboard</NavLink>
            <NavLink to="/add">Add Inventory</NavLink>
        </div>
    )
}

