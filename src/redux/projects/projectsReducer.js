import { createReducer, combineReducers } from '@reduxjs/toolkit';
import projectsActs from './projectsActions';

const {
    getProjectsRequest,
    getProjectsSuccess,
    getProjectsError,
    addProjectRequest,
    addProjectSuccess,
    addProjectError,
    // deleteProjectRequest,
    // deleteProjectSuccess,
    // deleteProjectError,
} = projectsActs;

const projectsList = createReducer([], {
    [addProjectSuccess]: (state, { payload: { id, ...payloadRest } }) => [
        ...state,
        { _id: id, ...payloadRest },
    ],
    [getProjectsSuccess]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
    [addProjectRequest]: () => true,
    [addProjectSuccess]: () => false,
    [addProjectError]: () => false,
    [getProjectsRequest]: () => true,
    [getProjectsSuccess]: () => false,
    [getProjectsError]: () => false,
});

const error = createReducer(null, {
    [addProjectRequest]: () => null,
    [getProjectsRequest]: () => null,
    [addProjectError]: (_, { payload }) => payload,
    [getProjectsError]: (_, { payload }) => payload,
});

export default combineReducers({
    projectsList,
    loading,
    error,
});
