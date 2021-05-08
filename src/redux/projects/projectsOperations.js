import { api } from '../../services';
import projectsActs from './projectsActions';
import { authOps } from '../auth';

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
    changeProjectSuccess,
    changeProjectError,
    addMemberRequest,
    addMemberSuccess,
    addMemberError,
} = projectsActs;

const getProjects = () => async dispatch => {
    dispatch(getProjectsRequest());

    try {
        // const response = await ...
        dispatch(getProjectsSuccess());
    } catch (error) {
        dispatch(getProjectsError());
    }
};

const addProject = project => async dispatch => {
    dispatch(addProjectRequest());

    try {
        const data = await api.addProject(project);

        dispatch(addProjectSuccess(data));
    } catch (error) {
        dispatch(addProjectError(api.formatError(error)));

        if (error.response.status === 401) {
            const withParams = () => addProject(project);
            dispatch(authOps.refreshToken(withParams));
        }
    }
};

const deleteProject = () => async dispatch => {
    dispatch(deleteProjectRequest());

    try {
        // const response = await ...
        dispatch(deleteProjectSuccess());
    } catch (error) {
        dispatch(deleteProjectError());
    }
};

const changeProject = () => async dispatch => {
    dispatch(changeProjectRequest());

    try {
        // const response = await ...
        dispatch(changeProjectSuccess());
    } catch (error) {
        dispatch(changeProjectError());
    }
};

const addMember = () => async dispatch => {
    dispatch(addMemberRequest());

    try {
        // const response = await ...
        dispatch(addMemberSuccess());
    } catch (error) {
        dispatch(addMemberError());
    }
};

const projectsOperations = {
    getProjects,
    addProject,
    deleteProject,
    changeProject,
    addMember,
};
export default projectsOperations;
