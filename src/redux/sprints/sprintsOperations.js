import sprintsActs from './sprintsActions';

const { addMemberRequest, addMemberSuccess, addMemberError } = sprintsActs;

const addMember = () => async dispatch => {
    dispatch(addMemberRequest());

    try {
        // const response = await ...
        dispatch(addMemberSuccess());
    } catch (error) {
        dispatch(addMemberError());
    }
};

const sprintsOperations = {
    addMember,
};
export default sprintsOperations;
