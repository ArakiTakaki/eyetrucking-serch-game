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
