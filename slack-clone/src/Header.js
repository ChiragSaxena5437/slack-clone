import React from 'react';
import './Header.css';
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime"

function Header() {
    return (
        <div className='header'>
             <div className='header_left'>
             <Avatar className="header_avatar"              alt="Chirag Saxena"
             />
             <AccessTimeIcon/>
             </div>
             <div className='header_search'></div>
             <div className='header_right'></div>

        </div>

       
    )
}

export default Header