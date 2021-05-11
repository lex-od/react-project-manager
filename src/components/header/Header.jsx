import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSls } from '../../redux/auth';

import AppBar from './AppBar/AppBar';
import css from './AppBar/AppBar.module.scss';
import logo from '../../assets/icons/goit-logo.svg';
// // =======================================
import { ChartButton } from '../common';
import { ChartModal } from '../tasks';

// =======================================
// import { DatePicker } from '../common';

const Header = () => {
    const isAuth = useSelector(authSls.getIsAuth);
    const [openModal, setOpenModal] = useState(false);
    const onOpenModal = () => {
        setOpenModal(state => !state);
    };

    return (
        <header>
            <nav className={css.header}>
                <NavLink exact to="/projects">
                    <img src={logo} className={css.logo} alt="logo" />
                </NavLink>
                {openModal && <ChartModal onClose={onOpenModal} />}
                <ChartButton onClick={onOpenModal}></ChartButton>
                {/* <DatePicker /> */}
                <nav>{isAuth && <AppBar />}</nav>
            </nav>
        </header>
    );
};

export default Header;
