import { createReducer, combineReducers } from '@reduxjs/toolkit';
import projectsActs from './projectsActions';

const {
    getProjectsRequest,
    getProjectsSuccess,
    getProjectsError,
    addProjectRequest,
    addProjectSuccess,
    addProjectError,
    deleteProjectRequest,
    deleteProjectSuccess,
    deleteProjectError,
    changeProjectRequest,
    changeProjectSucess,
    changeProjectError,
    addMemberRequest,
    addMemberSuccess,
    addMemberError,
} = projectsActs;

const projectsList = createReducer([], {
    [getProjectsRequest]: () => [],
    [getProjectsSuccess]: (_, { payload }) => payload,

    [addProjectSuccess]: (state, { payload: { id, ...payloadRest } }) => [
        ...state,
        { _id: id, ...payloadRest },
    ],

    [deleteProjectSuccess]: (state, { payload }) =>
        state.filter(project => project._id !== payload),

    [changeProjectSucess]: (state, { payload: { data, projectId } }) =>
        state.map(project =>
            project._id === projectId
                ? { ...project, title: data.newTitle }
                : project,
        ),

    [addMemberSuccess]: (state, { payload: { data, projectId } }) =>
        state.map(project =>
            project._id === projectId
                ? { ...project, members: data.newMembers }
                : project,
        ),
});

const loading = createReducer(false, {
    [getProjectsRequest]: () => true,
    [getProjectsSuccess]: () => false,
    [getProjectsError]: () => false,

    [addProjectRequest]: () => true,
    [addProjectSuccess]: () => false,
    [addProjectError]: () => false,

    [deleteProjectRequest]: () => true,
    [deleteProjectSuccess]: () => false,
    [deleteProjectError]: () => false,

    [changeProjectRequest]: () => true,
    [changeProjectSucess]: () => false,
    [changeProjectError]: () => false,

    [addMemberRequest]: () => true,
    [addMemberSuccess]: () => false,
    [addMemberError]: () => false,
});

const error = createReducer(null, {
    [getProjectsRequest]: () => null,
    [getProjectsError]: (_, { payload }) => payload,

    [addProjectRequest]: () => null,
    [addProjectError]: (_, { payload }) => payload,

    [deleteProjectRequest]: () => null,
    [deleteProjectError]: (_, { payload }) => payload,

    [changeProjectRequest]: () => null,
    [changeProjectError]: (_, { payload }) => payload,

    [addMemberRequest]: () => null,
    [addMemberError]: (_, { payload }) => payload,
});

export default combineReducers({
    projectsList,
    loading,
    error,
});
