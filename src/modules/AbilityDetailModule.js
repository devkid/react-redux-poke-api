import { createActions, handleActions } from "redux-actions";

const abilityDetailState = {};

export const GET_ABILITYDETAILS = 'abilitydetails/GET_ABILITYDETAILS';

const actions = createActions({
    [GET_ABILITYDETAILS]: () => {},
});

const abilityDetailReducer = handleActions(
    {
        [GET_ABILITYDETAILS]: (state, { payload }) => {
            return payload;
        },
    },
    abilityDetailState
);


export default abilityDetailReducer;

