import { createActions, handleActions } from "redux-actions";

const abilityListState = [];

export const GET_ABILITIES = 'abilities/GET_ABILITIES';

const actions = createActions({
    [GET_ABILITIES]: () => {}
});

const abilityListReducer = handleActions(
    {
        [GET_ABILITIES]: (state, { payload }) => {
            return payload;
        }
    },
    abilityListState
);

export default abilityListReducer;

