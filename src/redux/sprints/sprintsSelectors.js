const getAllSprints = state => state.sprints.sprintsList;

const getLoading = state => state.sprints.loading;

const getError = state => state.sprints.error;

const sprintsSls = { getAllSprints, getLoading, getError };
export default sprintsSls;
