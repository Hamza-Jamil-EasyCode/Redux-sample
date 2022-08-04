import { TRIGGER_DECREMENT, TRIGGER_INCREMENT } from "../../constants";

export const setIncrement = (data) => {
  return {
    type: TRIGGER_INCREMENT,
    payload: data,
  };
};

export const setDecrement = (data) => ({
  type: TRIGGER_DECREMENT,
  payload: data,
});
