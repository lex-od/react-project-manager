// import axios from 'axios';
// import { api } from '../../services';
import projectsActions from './projectsActions';


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
} = projectsActions;


const getProjects = () => async dispatch => {
    dispatch(getProjectsRequest());

    try {
        // const response = await ...
        dispatch(getProjectsSuccess());

    } catch (error) {
        dispatch(getProjectsError());
    }
};


const addProject = () => async dispatch => {
    dispatch(addProjectRequest());

    try {
        // const response = await ...
        dispatch(addProjectSuccess());

    } catch (error) {
        dispatch(addProjectError());
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