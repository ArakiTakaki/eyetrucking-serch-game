export const INCREMENT = "INCREMENT";
export const increment = () => ({ type: INCREMENT });

export const DECREMENT = "DECREMENT";
export const decrement = () => ({ type: DECREMENT });

export const MOUSE_LOCATION_REGISTER = "MOUSE_LOCATION_REGISTER";
export const mouseLocationRegister = (x, y) => ({
  type: MOUSE_LOCATION_REGISTER,
  payload: { x: x, y: y }
});

export const ADD_COMPONENT_EVENT = "ADD_COMPONENT_EVENT";
export const addComponentEvent = event => ({
  type: ADD_COMPONENT_EVENT,
  payload: event
});

export const DELETE_COMPONENT_EVENT = "DELETE_COMPONENT_EVENT";
export const deleteComponentEvent = idx => ({
  type: DELETE_COMPONENT_EVENT,
  payload: idx
});

export const CONTENT_VIDEO_STOP = "CONTENT_VIDEO_STOP";
export const contentVideoStop = () => ({ type: CONTENT_VIDEO_STOP });

export const CONTENT_VIDEO_START = "CONTENT_VIDEO_START";
export const contentVideoStart = () => ({ type: CONTENT_VIDEO_START });
