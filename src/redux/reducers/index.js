import { combineReducers } from "redux";
import { exampleReducer } from "./exampleReducer/exampleReducer";

// here you can combine all reducers.
//  e.g exampleReducer is a reducer and i use this in the whole application by name app

const rootReducer = combineReducers({
  app: exampleReducer,
});

export default rootReducer;
