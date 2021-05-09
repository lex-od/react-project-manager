import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authSls, authOps } from '../../../redux/auth';

import css from './AppBar.module.scss';
import sprite from '../../../assets/icons/sprite-logout-icon.svg';

export default function AppBar() {
    const dispatch = useDispatch();
    const onLogout = () => dispatch(authOps.logOut());

    const email = useSelector(authSls.getUserEmail);
    return (
        <div className={css.appBar}>
            <span>{email}</span>
            <button
                type="button"
                className={css.logoutButton}
                onClick={onLogout}
            >
                <svg className={css.logoutSvg}>
                    <use href={sprite + '#icon-logout'}></use>
                </svg>
                <span className={css.logoutText}>Log Out</span>
            </button>
        </div>
    );
}
