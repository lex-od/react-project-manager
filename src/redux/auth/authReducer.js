import { createReducer, combineReducers } from '@reduxjs/toolkit';
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

const initUser = { id: null, email: null };

const user = createReducer(initUser, {
    [loginSuccess]: (_, { payload }) => {
        const { id, email } = payload.data;
        return { id, email };
    },
});

const initTokens = { accessToken: null, refreshToken: null, sid: null };

const tokens = createReducer(initTokens, {
    [loginSuccess]: (_, { payload: { accessToken, refreshToken, sid } }) => ({
        accessToken,
        refreshToken,
        sid,
    }),
});

const loading = createReducer(false, {
    [registerRequest]: () => true,
    [registerSuccess]: () => false,
    [registerError]: () => false,

    [loginRequest]: () => true,

    [loginSuccess]: () => false,
    [loginError]: () => false,
});

const error = createReducer(null, {
    [registerRequest]: () => null,
    [registerError]: (_, { payload }) => payload,

    [loginRequest]: () => null,
    [loginError]: (_, { payload }) => payload,
});

export default combineReducers({
    user,
    tokens,

    loading,
    error,
});
