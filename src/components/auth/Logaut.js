import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { authOps } from '../../redux/auth';

export default function Logaut() {
    const dispatch = useDispatch();

    const onLogout = useCallback(() => dispatch(authOps.logOut()), [dispatch]);

    return (
        <div>
            <button type="button" onClick={onLogout}>
                Logout
            </button>
        </div>
    );
}
