import React from "react"
import './header.css';
import shelfieIcon from '../../media/shelfie_icon.png';
import { NavLink } from 'react-router-dom';

export default function Header(props)  {
    return (
        <div className="header">
            <img alt="Shelfie Logo" src={shelfieIcon}/>
            <h1>SHELFIE</h1>
            <ul>
                <li><NavLink  exact activeClassName='active' to="/">Dashboard</NavLink></li>
                <li><NavLink activeClassName='active' to="/add">Add Inventory</NavLink></li>
            </ul>
        </div>
    )
}

