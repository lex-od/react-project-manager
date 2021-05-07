import React from 'react';
// =================
// import { useSelector } from 'react-redux';
// import { authSelectors } from '../auth';
// import { routes } from '../../routes';

import AppBar from './AppBar/AppBar';
import css from './AppBar/AppBar.module.scss';
import logo from '../../assets/icons/goit-logo.svg';
import { DatePicker } from '../common';

const Header = () => {
    // const isAuth = useSelector(authSelectors.getIsAuth); //Cannot read property 'getIsAuth' of undefined
    const isAuth = true;

    return (
        <header>
            <div className={css.header}>
                <a href="/">
                    <img src={logo} className={css.logo} alt="logo" />
                </a>
                <DatePicker />
                <nav>{isAuth && <AppBar />}</nav>
            </div>
        </header>
    );
};

export default Header;
