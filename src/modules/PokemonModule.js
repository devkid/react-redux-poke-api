import { createActions, handleActions } from "redux-actions";

/* 초기 state값 */
const initialState = [
    {}
];

/* 액션 타입 설정 */
export const GET_POKEMONS = 'pokemons/GET_POKEMONS';

/* 포켓몬 관련 액션 함수 */
const actions = createActions({
    [GET_POKEMONS]: () => {}
});

/* 리듀서 함수 */
const pokemonListReducer = handleActions(
    {
        [GET_POKEMONS]: (state, { payload }) => {
            return payload;
        }
    },
    initialState
);

export default pokemonListReducer;

