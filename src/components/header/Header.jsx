import React from 'react';
// import { useSelector } from 'react-redux';
// import { routes } from '../../routes';

import AppBar from './AppBar/AppBar';
import css from './AppBar/AppBar.module.scss';
import logo from '../../assets/icons/goit-logo.svg';

const Header = () => {
    // const isAuth = useSelector(authSelectors.getIsAuthenticated);
    const isAuth = true;
    return (
        <header>
            <div className={css.header}>
                <a href="/">
                    <img src={logo} className={css.logo} alt="logo" />
                </a>

                <nav>{isAuth && <AppBar />}</nav>
            </div>
        </header>
    );
};

export default Header;
