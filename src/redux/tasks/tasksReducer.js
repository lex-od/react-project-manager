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

const tasksList = createReducer([], {
    [taskAddSuccess]: (state, { payload }) => [...state, payload],
    [taskGetRequest]: () => [],
    [taskGetSuccess]: (_, { payload }) => payload,

    [taskChangeSuccess]: (state, { payload }) => {
        state.map(task => {
            if (task._id === payload.taskId)
                task.hoursWasted = payload.changedHoursToState.newWastedHours;
        });
    },

    [taskDeleteSuccess]: (state, { payload }) =>
        state.filter(({ _id }) => _id !== payload.taskId),
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
    tasksList,
    // filter,
    loading,
    error,
});
