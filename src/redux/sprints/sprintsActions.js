import { createAction } from '@reduxjs/toolkit';

const addMemberRequest = createAction('sprints/addMember/request');
const addMemberSuccess = createAction('sprints/addMember/success');
const addMemberError = createAction('sprints/addMember/error');

const sprintAddRequest = createAction('sprints/add/request');
const sprintAddSuccess = createAction('sprints/add/success');
const sprintAddError = createAction('sprints/add/error');

const sprintGetRequest = createAction('sprint/get/request');
const sprintGetSuccess = createAction('sprint/get/success');
const sprintGetError = createAction('sprint/get/error');

// const sprintChangeRequest = createAction('sprint/change/request');
// const sprintChangeSuccess = createAction('sprint/change/success');
// const sprintChangeError = createAction('sprint/change/error');

const sprintDeleteRequest = createAction('sprint/delete/request');
const sprintDeleteSuccess = createAction('sprint/delete/success');
const sprintDeleteError = createAction('sprint/delete/error');

const sprintsActions = {
    addMemberRequest,
    addMemberSuccess,
    addMemberError,
    sprintAddRequest,
    sprintAddSuccess,
    sprintAddError,
    sprintGetRequest,
    sprintGetSuccess,
    sprintGetError,
    // sprintChangeRequest,
    // sprintChangeSuccess,
    // sprintChangeError,
    sprintDeleteRequest,
    sprintDeleteSuccess,
    sprintDeleteError,
};
export default sprintsActions;
