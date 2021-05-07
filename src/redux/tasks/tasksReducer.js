import { createReducer, combineReducers } from '@reduxjs/toolkit';
import tasksActs from './tasksActions';

const {
    taskAddRequest,
    taskAddSuccess,
    taskAddError,
    taskGetRequest,
    taskGetSuccess,
    taskGetError,
    taskChangeRequest,
    taskChangeSuccess,
    taskChangeError,
    taskDeleteRequest,
    taskDeleteSuccess,
    taskDeleteError,
    // tasksStartDate,
    // tasksEndDate,
} = tasksActs;

// const startDate = createReducer('', {
//     [tasksStartDate]: (_, { payload }) => payload,
// });

// const endDate = createReducer('', {
//     [tasksEndDate]: (_, { payload }) => payload,
// });

const tasks = createReducer([], {
    [taskAddSuccess]: (state, { payload }) => [...state, payload],
    [taskGetRequest]: () => [],
    [taskGetSuccess]: (_, { payload }) => payload,
    [taskChangeSuccess]: () => null, //??
    [taskDeleteSuccess]: (state, { payload }) =>
        state.filter(({ id }) => id !== payload),
});

// const filter = createReducer('', {
//     //
// });

const loading = createReducer(false, {
    [taskAddRequest]: () => true,
    [taskGetRequest]: () => true,
    [taskChangeRequest]: () => true,
    [taskDeleteRequest]: () => true,

    [taskAddSuccess]: () => false,
    [taskGetSuccess]: () => false,
    [taskChangeSuccess]: () => false,
    [taskDeleteSuccess]: () => false,

    [taskAddError]: () => false,
    [taskGetError]: () => false,
    [taskChangeError]: () => false,
    [taskDeleteError]: () => false,
});

const error = createReducer(null, {
    [taskAddRequest]: () => null,
    [taskGetRequest]: () => null,
    [taskChangeRequest]: () => null,
    [taskDeleteRequest]: () => null,

    [taskAddError]: (_, { payload }) => payload,
    [taskGetError]: (_, { payload }) => payload,
    [taskChangeError]: (_, { payload }) => payload,
    [taskDeleteError]: (_, { payload }) => payload,
});

export default combineReducers({
    // startDate,
    // endDate,
    tasks,
    // filter,
    loading,
    error,
});
