import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { availableColors, capitalize } from '../filters/colors'
import { StatusFilters } from '../filters/filterSlice' 
// Omit other footer components

const Footer = () => {
  const todosRemaining = useSelector(state => {
    const uncompletedTodos = state.todos.filter(todo => !todo.completed)
    return uncompletedTodos.length
  })
  const todos = useSelector(state => state.todos)
  console.log(todosRemaining)

  const { status, colors } = useSelector(state => state.filters)
  const dispatch = useDispatch()
  const handleMarkAll = () => {
    dispatch({type: 'todos/todoMarkAll'})
  }
  const handelClearCoplete = () => {
    dispatch({type: 'todos/todoClearAllCompelete'})
  }
  return (
    <footer className="footer">
      <div className="actions">
        <h5>Actions</h5>
        <button className="button" onClick={handleMarkAll}>Mark All Completed</button>
        <button className="button" onClick={handelClearCoplete}>Clear Completed</button>
      </div>

      {/* <RemainingTodos count={todosRemaining} />
      <StatusFilter value={status} onChange={onStatusChange} />
      <ColorFilters value={colors} onChange={onColorChange} /> */}
    </footer>
  )
}

export default Footer