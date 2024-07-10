import { act } from "react";
import filtersReducer from "./feature/filters/filterSlice";
import todosReducer from "./feature/todos/todosSlice";


export default rootReducer = (state = {}, action) => {
    return {
        todos: todosReducer(state.todos,action),
        filters: filtersReducer(state.filters, action),
    }
};
