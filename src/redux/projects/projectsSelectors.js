const getAllProjects = state => state.projects.projectsList;

const getLoading = state => state.projects.loading;

const getError = state => state.projects.error;

const projectsSls = { getAllProjects, getLoading, getError };
export default projectsSls;
