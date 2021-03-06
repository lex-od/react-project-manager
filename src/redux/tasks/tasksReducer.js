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
    taskFilterAct,
} = tasksActs;

const tasksList = createReducer([], {
    [taskAddSuccess]: (state, { payload: { id, ...rest } }) => [
        ...state,
        { _id: id, ...rest },
    ],

    [taskGetRequest]: () => [],
    [taskGetSuccess]: (_, { payload }) => payload,

    [taskChangeSuccess]: (state, { payload: { data, taskId } }) => {
        if (!data.day) return state;

        return state.map(task =>
            task._id === taskId
                ? {
                      ...task,
                      hoursWasted: data.newWastedHours,
                      hoursWastedPerDay: task.hoursWastedPerDay.map(dayObj =>
                          dayObj.currentDay === data.day.currentDay
                              ? data.day
                              : dayObj,
                      ),
                  }
                : task,
        );
    },

    [taskDeleteSuccess]: (state, { payload }) =>
        state.filter(({ _id }) => _id !== payload),
});

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

const filter = createReducer('', {
    [taskFilterAct]: (_, { payload }) => payload,
});

export default combineReducers({
    tasksList,
    loading,
    error,
    filter,
});

// [taskChangeSuccess]: (state, { payload }) =>
//     state.map(task =>
//         task._id === payload.taskId
//             ? {
//                   ...task,
//                   hoursWasted: payload.changedHoursToState.newWastedHours,
//               }
//             : task,
//     ),
