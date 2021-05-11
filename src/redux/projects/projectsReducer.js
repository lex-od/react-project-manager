import { createReducer, combineReducers } from '@reduxjs/toolkit';
import projectsActs from './projectsActions';

const {
    addMemberRequest,
    addMemberSuccess,
    addMemberError,
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
});

const loading = createReducer(false, {
    [addMemberRequest]: () => true,
    [addMemberSuccess]: () => false,
    [addMemberError]: () => false,

    [addProjectRequest]: () => true,
    [addProjectSuccess]: () => false,
    [addProjectError]: () => false,
});

const error = createReducer(null, {
    [addMemberRequest]: () => null,
    [addMemberError]: (_, { payload }) => payload,

    [addProjectRequest]: () => null,
    [addProjectError]: (_, { payload }) => payload,
});

export default combineReducers({
    items,
    loading,
    error,
});
