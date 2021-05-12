const getAllTasks = state => state.tasks.tasksList;

const getLoading = state => state.tasks.loading;

const getError = state => state.tasks.error;

const tasksSls = { getAllTasks, getLoading, getError };
export default tasksSls;
