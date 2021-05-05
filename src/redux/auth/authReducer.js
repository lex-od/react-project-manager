import { createReducer, combineReducers } from '@reduxjs/toolkit';

const initUser = { id: null, email: null };

const user = createReducer(initUser, {
    //
});

const initTokens = { accessToken: null, refreshToken: null, sid: null };

const tokens = createReducer(initTokens, {
    //
});

const loading = createReducer(false, {
    //
});

const error = createReducer(null, {
    //
});

export default combineReducers({
    user,
    tokens,
    loading,
    error,
});
