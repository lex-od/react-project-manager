import { createReducer, combineReducers } from '@reduxjs/toolkit';
import sprintsActions from './sprintsActions';

const {
    sprintGetRequest,
    sprintGetSuccess,
    sprintGetError,
    sprintAddRequest,
    sprintAddSuccess,
    sprintAddError,
    sprintDeleteRequest,
    sprintDeleteSuccess,
    sprintDeleteError,
    sprintChangeRequest,
    sprintChangeSuccess,
    sprintChangeError,
} = sprintsActions;

const sprintsList = createReducer([], {
    [sprintGetRequest]: () => [],
    [sprintGetSuccess]: (_, { payload }) => payload,

    [sprintAddSuccess]: (state, { payload: { id, ...payloadRest } }) => [
        ...state,
        { _id: id, ...payloadRest },
    ],

    [sprintDeleteSuccess]: (state, { payload }) =>
        state.filter(sprint => sprint._id !== payload),

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

    [sprintDeleteRequest]: () => true,
    [sprintDeleteSuccess]: () => false,
    [sprintDeleteError]: () => false,

    [sprintChangeRequest]: () => true,
    [sprintChangeSuccess]: () => false,
    [sprintChangeError]: () => false,
});

const error = createReducer(null, {
    [sprintGetRequest]: () => null,
    [sprintGetError]: (_, { payload }) => payload,

    [sprintAddRequest]: () => null,
    [sprintAddError]: (_, { payload }) => payload,

    [sprintDeleteRequest]: () => null,
    [sprintDeleteError]: (_, { payload }) => payload,

    [sprintChangeRequest]: () => null,
    [sprintChangeError]: (_, { payload }) => payload,
});

export default combineReducers({
    sprintsList,
    loading,
    error,
});
