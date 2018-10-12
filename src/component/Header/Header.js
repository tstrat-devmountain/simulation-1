import React from "react"
import './header.css';
import shelfieIcon from '../../media/shelfie_icon.png';

export default function Header(props)  {
    return (
        <div className="header">
            <img src={shelfieIcon}/>
            <h1>SHELFIE</h1>
        </div>
    )
}

