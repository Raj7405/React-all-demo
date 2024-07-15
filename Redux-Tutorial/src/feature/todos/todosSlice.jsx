const intialState = [];

function nextTodoId(todos) {
  const maxId = todos?.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
  return maxId + 1;
}

const todosReducer = (state = intialState, action) => {
  switch (action.type) {
    case "todos/todoAdded": {
      return [
        ...state,
        {
          id: nextTodoId(state),
          text: action.payload,
          completed: false,
        },
      ];
    }
    case "todos/todoToggled": {
      return state.map((todos) => {
        if (todos.id !== action.payload) {
          return todos;
        }
        return {
          ...todos,
          completed: !todos.completed,
        };
      });
    }
     case 'todos/todoMarkAll': {
       return state.map(todos => {
          return {
            ...todos,
            completed: true,
          }
       })
     }
     case 'todos/todoClearAllCompelete':{     
        return [
          ...state.filter((todos) => !todos.completed) 
        ]

        
     }
    default:
      return state;
  }
};

export default todosReducer;
