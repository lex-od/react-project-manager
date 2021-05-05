import { api } from '../../services';
import authActs from './authActions';

const {
    registerRequest,
    registerSuccess,
    registerError,
    loginRequest,
    loginSuccess,
    loginError,
    // logoutRequest,
    // logoutSuccess,
    // logoutError,
    // refreshRequest,
    // refreshSuccess,
    // refreshError,
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

const authOperations = { register, login };
export default authOperations;
