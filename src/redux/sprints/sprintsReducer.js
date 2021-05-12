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
    [sprintGetRequest]: () => [],
    [sprintGetSuccess]: (_, { payload }) => payload,

    [sprintAddSuccess]: (state, { payload: { id, ...payloadRest } }) => [
        ...state,
        { _id: id, ...payloadRest },
    ],

    [sprintChangeSuccess]: (state, { payload: { data, sprintId } }) =>
        state.map(sprint =>
            sprint._id === sprintId
                ? {
                      ...sprint,
                      title: data.newTitle,
                  }
                : sprint,
        ),
});

const loading = createReducer(false, {
    [sprintGetRequest]: () => true,
    [sprintGetSuccess]: () => false,
    [sprintGetError]: () => false,

    [sprintAddRequest]: () => true,
    [sprintAddSuccess]: () => false,
    [sprintAddError]: () => false,

    [sprintChangeRequest]: () => true,
    [sprintChangeSuccess]: () => false,
    [sprintChangeError]: () => false,
});

const error = createReducer(null, {
    [sprintGetRequest]: () => null,
    [sprintGetError]: (_, { payload }) => payload,

    [sprintAddRequest]: () => null,
    [sprintAddError]: (_, { payload }) => payload,

    [sprintChangeRequest]: () => null,
    [sprintChangeError]: (_, { payload }) => payload,
});

export default combineReducers({
    sprintsList,
    loading,
    error,
});
