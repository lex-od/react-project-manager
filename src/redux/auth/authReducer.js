import { createReducer, combineReducers } from '@reduxjs/toolkit';
import authActs from './authActions';
import { projectsActs } from '../projects';

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

const { addProjectError } = projectsActs;

const initUser = { id: null, email: null };

const user = createReducer(initUser, {
    [loginSuccess]: (_, { payload }) => {
        const { id, email } = payload.data;
        return { id, email };
    },

    [logoutSuccess]: () => initUser,
    [logoutError]: (state, { payload: { status } }) =>
        status === 404 ? initUser : state,

    [refreshError]: () => initUser,

    [addProjectError]: (state, { payload: { status } }) =>
        status === 404 ? initUser : state,
});

const initTokens = { accessToken: null, refreshToken: null, sid: null };

const tokens = createReducer(initTokens, {
    [loginSuccess]: (_, { payload: { accessToken, refreshToken, sid } }) => ({
        accessToken,
        refreshToken,
        sid,
    }),

    [logoutSuccess]: () => initTokens,
    [logoutError]: (state, { payload: { status } }) =>
        status === 404 ? initTokens : state,

    [refreshError]: () => initTokens,
    [refreshSuccess]: (
        _,
        { payload: { newAccessToken, newRefreshToken, newSid } },
    ) => ({
        accessToken: newAccessToken,
        refreshToken: newRefreshToken,
        sid: newSid,
    }),

    [addProjectError]: (state, { payload: { status } }) =>
        status === 404 ? initTokens : state,
});

const loading = createReducer(false, {
    [registerRequest]: () => true,
    [registerSuccess]: () => false,
    [registerError]: () => false,

    [loginRequest]: () => true,
    [loginSuccess]: () => false,
    [loginError]: () => false,

    [logoutRequest]: () => true,
    [logoutSuccess]: () => false,
    [logoutError]: () => false,

    [refreshRequest]: () => true,
    [refreshSuccess]: () => false,
    [refreshError]: () => false,
});

const error = createReducer(null, {
    [registerRequest]: () => null,
    [registerError]: (_, { payload }) => payload,

    [loginRequest]: () => null,
    [loginError]: (_, { payload }) => payload,

    [logoutRequest]: () => true,
    [logoutError]: (_, { payload }) => payload,

    [refreshRequest]: () => true,
    [refreshError]: (_, { payload }) => payload,
});

export default combineReducers({
    user,
    tokens,
    loading,
    error,
});
