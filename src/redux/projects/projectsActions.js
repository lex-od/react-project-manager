import { createAction } from '@reduxjs/toolkit';

// get projects

const getProjectsRequest = createAction('projects/getProjects/request');
const getProjectsSuccess = createAction('projects/getProjects/success');
const getProjectsError = createAction('projects/getProjects/error');

// add project

const addProjectRequest = createAction('projects/addProject/request');
const addProjectSuccess = createAction('projects/addProject/success');
const addProjectError = createAction('projects/addProject/error');

// delete project

const deleteProjectRequest = createAction('projects/deleteProject/request');
const deleteProjectSuccess = createAction('projects/deleteProject/success');
const deleteProjectError = createAction('projects/deleteProject/error');

const projectsActions = {
    getProjectsRequest,
    getProjectsSuccess,
    getProjectsError,
    addProjectRequest,
    addProjectSuccess,
    addProjectError,
    deleteProjectRequest,
    deleteProjectSuccess,
    deleteProjectError,
};

export default projectsActions;
