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


// change project

const changeProjectRequest = createAction('projects/changeProject/request');
const changeProjectSuccess = createAction('projects/changeProject/success');
const changeProjectError = createAction('projects/changeProject/error');


// add member

const addMemberRequest = createAction('projects/addMember/request');
const addMemberSuccess = createAction('projects/addMember/success');
const addMemberError = createAction('projects/addMember/error');


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
    changeProjectRequest,
    changeProjectSuccess,
    changeProjectError,
    addMemberRequest,
    addMemberSuccess,
    addMemberError,
};

export default projectsActions;