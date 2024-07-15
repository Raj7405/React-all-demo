import filtersReducer from "./feature/filters/filterSlice";
import todosReducer from "./feature/todos/todosSlice";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    todos: todosReducer,
    filters: filtersReducer,
})

export default rootReducer

