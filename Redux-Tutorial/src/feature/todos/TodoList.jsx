import React, { useEffect } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import TodoListItem from './TodoListItem'

function TodoList() {
    const todos = useSelector(state => state.todos)
    const renderedListItems = todos.map(todoItem => {
        return <TodoListItem key={todoItem.id} todo={todoItem}/>
    })

    return (
        <ul className='todo-list'>
            {renderedListItems}
        </ul>
    )
}

export default TodoList

