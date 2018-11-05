import * as Actions from "./actions";

const reducer = (state, action) => {
  const { payload } = action; // eslint-disable-line
  switch (action.type) {
    case Actions.INCREMENT:
      return { ...state, number: state.number + 1 };
    case Actions.DECREMENT:
      return { ...state, number: state.number - 1 };
    case Actions.MOUSE_LOCATION_REGISTER:
      return { ...state, mouse: payload };
    case Actions.ADD_COMPONENT_EVENT:
      return { ...state, events: [...state.events, payload] };
    case Actions.DELETE_COMPONENT_EVENT:
      return {
        ...state,
        events: state.events.filter(event => event.id !== payload)
      };
    case Actions.CONTENT_VIDEO_START:
      return { ...state, video: { play: true } };
    case Actions.CONTENT_VIDEO_STOP:
      return { ...state, video: { play: false } };
    default:
      return state;
  }
};
// [eslint] Insert `··`

export default reducer;
