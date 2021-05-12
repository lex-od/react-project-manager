import { createAction } from '@reduxjs/toolkit';

const taskAddRequest = createAction('task/add/request');
const taskAddSuccess = createAction('task/add/success');
const taskAddError = createAction('task/add/error');

const taskGetRequest = createAction('task/get/request');
const taskGetSuccess = createAction('task/get/success');
const taskGetError = createAction('task/get/error');

const taskChangeRequest = createAction('task/change/request');
const taskChangeSuccess = createAction('task/change/success');
const taskChangeError = createAction('task/change/error');

const taskDeleteRequest = createAction('task/delete/request');
const taskDeleteSuccess = createAction('task/delete/success');
const taskDeleteError = createAction('task/delete/error');

const tasksActs = {
    taskAddRequest,
    taskAddSuccess,
    taskAddError,
    taskGetRequest,
    taskGetSuccess,
    taskGetError,
    taskChangeRequest,
    taskChangeSuccess,
    taskChangeError,
    taskDeleteRequest,
    taskDeleteSuccess,
    taskDeleteError,
};
export default tasksActs;
