import { createReducer, combineReducers } from '@reduxjs/toolkit';
import sprintsActions from './sprintsActions';

const {
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
    [sprintAddSuccess]: (state, { payload: { id, ...payloadRest } }) => [
        ...state,
        { _id: id, ...payloadRest },
    ],

    [sprintGetRequest]: () => [],
    [sprintGetSuccess]: (_, { payload }) => payload,
    [sprintChangeSuccess]: (state, { payload }) =>
        state.map(sprint =>
            sprint._id === payload.sprintId
                ? {
                      ...sprint,
                      title: payload.changedTitle.newTitle,
                  }
                : sprint,
        ),
});

const loading = createReducer(false, {
    [sprintAddRequest]: () => true,
    [sprintAddSuccess]: () => false,
    [sprintAddError]: () => false,

    [sprintGetRequest]: () => true,
    [sprintGetSuccess]: () => false,
    [sprintGetError]: () => false,

    [sprintChangeRequest]: () => true,
    [sprintChangeSuccess]: () => false,
    [sprintChangeError]: () => false,
});

const error = createReducer(null, {
    [sprintAddRequest]: () => null,
    [sprintAddError]: (_, { payload }) => payload,
    [sprintGetRequest]: () => null,
    [sprintGetError]: (_, { payload }) => payload,
    [sprintChangeRequest]: () => null,
    [sprintChangeError]: (_, { payload }) => payload,
});

export default combineReducers({
    sprintsList,
    loading,
    error,
});
