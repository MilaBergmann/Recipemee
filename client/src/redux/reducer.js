import { combineReducers } from "redux";
import likesReducer from "./likes/slice.js";

const rootReducer = combineReducers({
    ///friends is the prop we defined in the global state
    likes: likesReducer,

});

export default rootReducer;
