import { createReducer, combineReducers } from '@reduxjs/toolkit';

const items = createReducer([], {
    //
});

const loading = createReducer(false, {
    //
});

const error = createReducer(null, {
    //
});

export default combineReducers({
    items,
    loading,
    error,
});
