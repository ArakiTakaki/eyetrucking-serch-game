export const INCREMENT = "INCREMENT";
export const increment = () => ({ type: INCREMENT });

export const DECREMENT = "DECREMENT";
export const decrement = () => ({ type: DECREMENT });

export const MOUSE_LOCATION_REGISTER = "MOUSE_LOCATION_REGISTER";
export const mouseLocationRegister = (x, y) => ({
  type: MOUSE_LOCATION_REGISTER,
  payload: { x: x, y: y }
});
