import { createAction } from '@reduxjs/toolkit';

const registerRequest = createAction('auth/register/request');
const registerSuccess = createAction('auth/register/success');
const registerError = createAction('auth/register/error');

const loginRequest = createAction('auth/login/request');
const loginSuccess = createAction('auth/login/success');
const loginError = createAction('auth/login/error');

const logoutRequest = createAction('auth/logout/request');
const logoutSuccess = createAction('auth/logout/success');
const logoutError = createAction('auth/logout/error');

const refreshRequest = createAction('auth/refresh/request');
const refreshSuccess = createAction('auth/refresh/success');
const refreshError = createAction('auth/refresh/error');

const authActions = {
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
};
export default authActions;
