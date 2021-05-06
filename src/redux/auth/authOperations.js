import { authSls } from '.';
import { api } from '../../services';
import authActs from './authActions';

const {
    registerRequest,
    registerSuccess,
    registerError,
    loginRequest,
    loginSuccess,
    loginError,
    logoutRequest,
    logoutSuccess,
    logoutError,
    refreshRequest,
    refreshSuccess,
    refreshError,
} = authActs;

const register = credentials => async dispatch => {
    dispatch(registerRequest());

    try {
        const user = await api.register(credentials);

        dispatch(registerSuccess(user));
        dispatch(login(credentials));
    } catch ({ name, message }) {
        dispatch(registerError({ name, message }));
    }
};

const login = credentials => async dispatch => {
    dispatch(loginRequest());

    try {
        const data = await api.login(credentials);

        api.setToken(data.accessToken);
        dispatch(loginSuccess(data));
    } catch ({ name, message }) {
        dispatch(loginError({ name, message }));
    }
};

const logOut = () => async dispatch => {
    dispatch(logoutRequest());

    try {
        await api.logOut();

        api.unsetToken();
        dispatch(logoutSuccess());
    } catch (error) {
        dispatch(logoutError(error.message));
        if (error.response.status === 401) {
            dispatch(refreshToken(logOut));
        }
    }
};

const refreshToken = prevOps => async (dispatch, getState) => {
    const refreshToken = authSls.getRefreshToken(getState());
    const sid = authSls.getSid(getState());
    api.setToken(refreshToken);
    dispatch(refreshRequest());

    try {
        const data = await api.refresh(sid);

        dispatch(refreshSuccess(data));
        api.setToken(data.newAccessToken);

        dispatch(prevOps());
    } catch (error) {
        dispatch(refreshError(error.message));
    }
};

const authOperations = { register, login, logOut, refreshToken };
export default authOperations;
