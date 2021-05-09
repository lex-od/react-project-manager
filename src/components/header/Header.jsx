import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSls } from '../../redux/auth';

import AppBar from './AppBar/AppBar';
import css from './AppBar/AppBar.module.scss';
import logo from '../../assets/icons/goit-logo.svg';

// =======================================
// import { DatePicker } from '../common';

const Header = () => {
    const isAuth = useSelector(authSls.getIsAuth);

    return (
        <header>
            <nav className={css.header}>
                <NavLink exact to="/projects">
                    <img src={logo} className={css.logo} alt="logo" />
                </NavLink>
                {/* <DatePicker /> */}
                <nav>{isAuth && <AppBar />}</nav>
            </nav>
        </header>
    );
};

export default Header;
