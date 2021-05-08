import { createReducer, combineReducers } from '@reduxjs/toolkit';
import projectsActs from './projectsActions';

const {
    // getProjectsRequest,
    // getProjectsSuccess,
    // getProjectsError,
    addProjectRequest,
    addProjectSuccess,
    addProjectError,
    // deleteProjectRequest,
    // deleteProjectSuccess,
    // deleteProjectError,
} = projectsActs;

const items = createReducer([], {
    [addProjectSuccess]: (state, { payload: { id, ...payloadRest } }) => [
        ...state,
        { _id: id, ...payloadRest },
    ],
});

const loading = createReducer(false, {
    [addProjectRequest]: () => true,
    [addProjectSuccess]: () => false,
    [addProjectError]: () => false,
});

const error = createReducer(null, {
    [addProjectRequest]: () => null,
    [addProjectError]: (_, { payload }) => payload,
});

export default combineReducers({
    items,
    loading,
    error,
});
