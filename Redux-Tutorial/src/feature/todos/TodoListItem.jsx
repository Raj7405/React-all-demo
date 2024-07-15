import React from 'react'
import { availableColors, capitalize } from '../filters/colors'
import { useDispatch, useSelector } from 'react-redux'

const selectTodoById = (todos, todoId) => {
  return todos.find(todo => todo.id === todoId)
}

function TodoListItem({todo}) {
  // const todo = useSelector(state => state.todos)
  // const {text, completed, color} = todo
  const dispatch = useDispatch()
  
  const handleSelectItem = (e) => {
    console.log(e.target.id)
    dispatch({ type: 'todos/todoToggled', payload: todo.id });
  }
  console.log(todo)
  return (
    <div>
      <input
        type='checkbox'
        onChange={handleSelectItem}
        checked={todo?.completed}
        value={todo?.text}
        id={ todo?.id}
      />
      <label htmlFor={todo?.id}>
        {todo?.text}
      </label>
    </div>
  )
}

export default TodoListItem