import { createAction } from '@reduxjs/toolkit';

const addMemberRequest = createAction('projects/addMember/request');
const addMemberSuccess = createAction('projects/addMember/success');
const addMemberError = createAction('projects/addMember/error');

const sprintsActions = {
    addMemberRequest,
    addMemberSuccess,
    addMemberError,
};
export default sprintsActions;
