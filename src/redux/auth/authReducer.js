import { createReducer, combineReducers } from '@reduxjs/toolkit';
import authActs from './authActions';
import { projectsActs } from '../projects';
import { sprintsActs } from '../sprints';
import { tasksActs } from '../tasks';

const {
    registerRequest,
    registerSuccess,
    registerError,
    loginRequest,
    loginSuccess,
    loginError,
    logoutRequest,
    logoutSuccess,
    logoutError,
    refreshRequest,
    refreshSuccess,
    refreshError,
} = authActs;
const {
    getProjectsError,
    addProjectError,
    deleteProjectError,
    changeProjectError,
    addMemberError,
} = projectsActs;
const {
    sprintGetError,
    sprintAddError,
    sprintDeleteError,
    sprintChangeError,
} = sprintsActs;
const { taskAddError } = tasksActs;

const initUser = { id: null, email: null };

const resetUserWhenInvalidSession = (
    state,
    { payload: { status, respMsg } },
) => {
    if (typeof respMsg !== 'string') return state;

    const normRespMsg = respMsg.toLowerCase();
    const isIncludesSessionOrUser =
        normRespMsg.includes('session') || normRespMsg.includes('user');

    if (status === 404 && isIncludesSessionOrUser) {
        return initUser;
    }

    return state;
};

const user = createReducer(initUser, {
    [loginSuccess]: (_, { payload }) => {
        const { id, email } = payload.data;
        return { id, email };
    },

    [logoutSuccess]: () => initUser,
    [logoutError]: resetUserWhenInvalidSession,

    [refreshError]: () => initUser,

    [getProjectsError]: resetUserWhenInvalidSession,
    [addProjectError]: resetUserWhenInvalidSession,
    [deleteProjectError]: resetUserWhenInvalidSession,
    [changeProjectError]: resetUserWhenInvalidSession,
    [addMemberError]: resetUserWhenInvalidSession,

    [sprintGetError]: resetUserWhenInvalidSession,
    [sprintAddError]: resetUserWhenInvalidSession,
    [sprintDeleteError]: resetUserWhenInvalidSession,
    [sprintChangeError]: resetUserWhenInvalidSession,

    [taskAddError]: resetUserWhenInvalidSession,
});

const initTokens = { accessToken: null, refreshToken: null, sid: null };

const resetTokensWhenInvalidSession = (
    state,
    { payload: { status, respMsg } },
) => {
    if (typeof respMsg !== 'string') return state;

    const normRespMsg = respMsg.toLowerCase();
    const isIncludesSessionOrUser =
        normRespMsg.includes('session') || normRespMsg.includes('user');

    if (status === 404 && isIncludesSessionOrUser) {
        return initTokens;
    }

    return state;
};

const tokens = createReducer(initTokens, {
    [loginSuccess]: (_, { payload: { accessToken, refreshToken, sid } }) => ({
        accessToken,
        refreshToken,
        sid,
    }),

    [logoutSuccess]: () => initTokens,
    [logoutError]: resetTokensWhenInvalidSession,

    [refreshSuccess]: (
        _,
        { payload: { newAccessToken, newRefreshToken, newSid } },
    ) => ({
        accessToken: newAccessToken,
        refreshToken: newRefreshToken,
        sid: newSid,
    }),
    [refreshError]: () => initTokens,

    [getProjectsError]: resetTokensWhenInvalidSession,
    [addProjectError]: resetTokensWhenInvalidSession,
    [deleteProjectError]: resetTokensWhenInvalidSession,
    [changeProjectError]: resetTokensWhenInvalidSession,
    [addMemberError]: resetTokensWhenInvalidSession,

    [sprintGetError]: resetTokensWhenInvalidSession,
    [sprintAddError]: resetTokensWhenInvalidSession,
    [sprintDeleteError]: resetTokensWhenInvalidSession,
    [sprintChangeError]: resetTokensWhenInvalidSession,

    [taskAddError]: resetTokensWhenInvalidSession,
});

const loading = createReducer(false, {
    [registerRequest]: () => true,
    [registerSuccess]: () => false,
    [registerError]: () => false,

    [loginRequest]: () => true,
    [loginSuccess]: () => false,
    [loginError]: () => false,

    [logoutRequest]: () => true,
    [logoutSuccess]: () => false,
    [logoutError]: () => false,

    [refreshRequest]: () => true,
    [refreshSuccess]: () => false,
    [refreshError]: () => false,
});

const error = createReducer(null, {
    [registerRequest]: () => null,
    [registerError]: (_, { payload }) => payload,

    [loginRequest]: () => null,
    [loginError]: (_, { payload }) => payload,

    [logoutRequest]: () => true,
    [logoutError]: (_, { payload }) => payload,

    [refreshRequest]: () => true,
    [refreshError]: (_, { payload }) => payload,
});

export default combineReducers({
    user,
    tokens,
    loading,
    error,
});
