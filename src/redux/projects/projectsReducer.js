import { createReducer, combineReducers } from '@reduxjs/toolkit';
import projectsActs from './projectsActions';

const {
    getProjectsRequest,
    getProjectsSuccess,
    getProjectsError,
    addMemberRequest,
    addMemberSuccess,
    addMemberError,
    addProjectRequest,
    addProjectSuccess,
    addProjectError,
    deleteProjectRequest,
    deleteProjectSuccess,
    deleteProjectError,
} = projectsActs;

const projectsList = createReducer([], {
    [addMemberSuccess]: (state, { payload: { data, projectId } }) =>
        state.map(project =>
            project._id === projectId
                ? { ...project, members: data.newMembers }
                : project,
        ),

    [addProjectSuccess]: (state, { payload: { id, ...payloadRest } }) => [
        ...state,
        { _id: id, ...payloadRest },
    ],

    [getProjectsSuccess]: (_, { payload }) => payload,

    [deleteProjectSuccess]: (state, { payload }) =>
        state.filter(project => project._id !== payload),
});

const loading = createReducer(false, {
    [addMemberRequest]: () => true,
    [addMemberSuccess]: () => false,
    [addMemberError]: () => false,

    [addProjectRequest]: () => true,
    [addProjectSuccess]: () => false,
    [addProjectError]: () => false,

    [getProjectsRequest]: () => true,
    [getProjectsSuccess]: () => false,
    [getProjectsError]: () => false,

    [deleteProjectRequest]: () => true,
    [deleteProjectSuccess]: () => false,
    [deleteProjectError]: () => false,
});

const error = createReducer(null, {
    [addMemberRequest]: () => null,
    [addMemberError]: (_, { payload }) => payload,

    [addProjectRequest]: () => null,
    [addProjectError]: (_, { payload }) => payload,

    [getProjectsRequest]: () => null,
    [getProjectsError]: (_, { payload }) => payload,

    [deleteProjectRequest]: () => null,
    [deleteProjectError]: (_, { payload }) => payload,
});

export default combineReducers({
    projectsList,
    loading,
    error,
});
