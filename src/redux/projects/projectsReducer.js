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
    // deleteProjectRequest,
    // deleteProjectSuccess,
    // deleteProjectError,
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
});

const error = createReducer(null, {
    [addMemberRequest]: () => null,
    [addMemberError]: (_, { payload }) => payload,

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
