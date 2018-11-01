import * as Actions from "./actions";

const reducer = (state, action) => {
  const { payload } = action; // eslint-disable-line
  switch (action.type) {
    case Actions.INCREMENT:
      return { ...state, number: state.number + 1 };
    case Actions.DECREMENT:
      return { ...state, number: state.number - 1 };
    default:
      return state;
  }
};
// [eslint] Insert `··`

export default reducer;
