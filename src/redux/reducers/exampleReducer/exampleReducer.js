import {
  SET_VALUE,
  TRIGGER_DECREMENT,
  TRIGGER_INCREMENT,
} from "../../constants";

//   This is initialStates for redux states
const initialState = {
  count: 0,
};

export const exampleReducer = (state = initialState, action) => {
  switch (action.type) {
    case TRIGGER_INCREMENT:
      state = {
        ...state,
        count: action.payload,
      };
      break;
    case TRIGGER_DECREMENT:
      state = {
        ...state,
        count: action.payload,
      };
      break;
  }

  return state;
};
