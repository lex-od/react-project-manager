import { createSelector } from '@reduxjs/toolkit';

const getAllTasks = state => state.tasks.tasksList;

const getLoading = state => state.tasks.loading;

const getError = state => state.tasks.error;

const getFilter = state => state.tasks.filter;

const getVisibleTasks = createSelector(
    [getFilter, getAllTasks],
    (filter, tasksList) => {
        const normalizeFilter = filter.toLowerCase();

        return tasksList.filter(task =>
            task.title.toLocaleLowerCase().includes(normalizeFilter),
        );
    },
);


const tasksSls = { getAllTasks, getLoading, getError, getFilter, getVisibleTasks };
export default tasksSls;
