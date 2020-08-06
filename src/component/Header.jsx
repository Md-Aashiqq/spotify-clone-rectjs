import React from 'react'
import "../css/Header.css";
import SearchIcon from '@material-ui/icons/Search';
import {Avatar } from '@material-ui/core';
import {useDataLayerValue } from "./DataLayer"


function Header({spotify}) {
    const [{user},dispatch] = useDataLayerValue();
    return (
        <div className='header'>
                <div className='header__left'>
                    <SearchIcon />
                    <input  type='text'  placeholder='Search for song' />
                </div>
                <div className='header__right'>
                        <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
                    <h4>{user?.display_name} </h4>
                </div>
        </div>
    )
}

export default Header
