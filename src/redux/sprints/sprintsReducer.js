import { createReducer, combineReducers } from '@reduxjs/toolkit';
import sprintsActions from './sprintsActions';

const {
    addMemberRequest,
    addMemberSuccess,
    addMemberError,
    sprintAddRequest,
    sprintAddSuccess,
    sprintAddError,
    sprintGetRequest,
    sprintGetSuccess,
    sprintGetError,
    sprintChangeRequest,
    sprintChangeSuccess,
    sprintChangeError,
    sprintDeleteRequest,
    sprintDeleteSuccess,
    sprintDeleteError,
} = sprintsActions;

const sprintsList = createReducer([], {
    [sprintGetRequest]: () => [],
    [sprintGetSuccess]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
    [sprintGetRequest]: () => true,
    [sprintGetSuccess]: () => false,
    [sprintGetError]: () => false,
});

const error = createReducer(null, {
    //
});

export default combineReducers({
    sprintsList,
    loading,
    error,
});
