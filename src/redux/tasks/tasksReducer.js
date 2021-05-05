import { createReducer, combineReducers } from '@reduxjs/toolkit';

// const startDate = createReducer(null, {
//     //
// });

// const endDate = createReducer(null, {
//     //
// });

const items = createReducer([], {
    //
});

const filter = createReducer('', {
    //
});

const loading = createReducer(false, {
    //
});

const error = createReducer(null, {
    //
});

export default combineReducers({
    // startDate,
    // endDate,
    items,
    filter,
    loading,
    error,
});
