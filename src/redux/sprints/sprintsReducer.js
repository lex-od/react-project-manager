import { createReducer, combineReducers } from '@reduxjs/toolkit';
import sprintsActions from './sprintsActions';

const {
    sprintAddRequest,
    sprintAddSuccess,
    sprintAddError,
    sprintGetRequest,
    sprintGetSuccess,
    sprintGetError,
    // sprintChangeRequest,
    // sprintChangeSuccess,
    // sprintChangeError,
    sprintDeleteRequest,
    sprintDeleteSuccess,
    sprintDeleteError,
} = sprintsActions;

const sprintsList = createReducer([], {
    [sprintAddSuccess]: (state, { payload: { id, ...payloadRest } }) => [
        ...state,
        { _id: id, ...payloadRest },
    ],

    [sprintGetRequest]: () => [],
    [sprintGetSuccess]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
    [sprintAddRequest]: () => true,
    [sprintAddSuccess]: () => false,
    [sprintAddError]: () => false,

    [sprintGetRequest]: () => true,
    [sprintGetSuccess]: () => false,
    [sprintGetError]: () => false,
});

const error = createReducer(null, {
    [sprintAddRequest]: () => null,
    [sprintAddError]: (_, { payload }) => payload,
});

export default combineReducers({
    sprintsList,
    loading,
    error,
});
