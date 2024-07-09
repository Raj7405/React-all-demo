const intialState = {
  todos: [
    { id: 0, text: "Learn React", completed: true },
    { id: 1, text: "Learn Redux", completed: false, color: "purple" },
    { id: 2, text: "Build something fun!", completed: false, color: "blue" },
  ],
  filters: {
    status: "All",
    colors: [],
  },
};

function nextTodoId(todos) {
    const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1)
    return maxId + 1
}

export default appReducer = (state = intialState, action) => {
  switch (action.type) {
    case "todos/todoAdded": {
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: nextTodoId(state.todos),
            text: action.payload,
            completed: false,
          },
        ],
      };
    }
    case 'todos/todoToggled': {
      return {
        ...state,
        todos: state.todos.map((todos) => {
          if (todos.id !== action.payload) {
            return todos;
          }
          return {
            ...todos,
            completed: !todos.completed,
          };
        }),
      };
    }
    case  'todos/statusFilterChanged': {
        return {
            ...state,
            filters:{
                ...state.filters,
                status: action.payload,
            }
        }
    }
    default:
      return state;
  }
};
