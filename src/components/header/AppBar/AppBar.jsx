import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { authSelectors, authOperations } from '../../../redux/auth';

import css from './AppBar.module.scss';
// import logout from '../../../assets/icons/logout.svg';
import sprite from '../../../assets/icons/sprite.svg';

export default function AppBar() {
    // const dispatch = useDispatch();
    // const name = useSelector(authSelectors.getUsername);
    // const onLogout = () => dispatch(authOperations.logOut());
    return (
        <div className={css.appBar}>
            <span>Username</span> {/* {name} */}
            <button type="button" className={css.logoutButton}>
                <svg className={css.logoutSvg}>
                    <use href={sprite + '#icon-logout'}></use>
                </svg>

                <span className={css.logoutText}>Log Out</span>
            </button>
        </div>
    );
}
