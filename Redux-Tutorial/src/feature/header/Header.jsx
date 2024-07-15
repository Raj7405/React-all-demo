import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import store from '../../store'

// store.dispatch()

const handleKeyDown =  (e,setText) => {
    const trimmedText = e.target.value.trim()

    if(e.key === 'Enter' && trimmedText){
        store.dispatch({ type: 'todos/todoAdded', payload: trimmedText });
        setText('')
    }
}
function Header() {
    const [text, setText] = useState('')
    const dispatch = useDispatch()

    const handleChange = e => setText(e.target.value)

    return (
        <div>
            <input
                type="text"
                placeholder="What needs to be done?"
                autoFocus={true}
                value={text}
                onChange={handleChange}
                onKeyDown={(e)=> handleKeyDown(e,setText)}
            />
        </div>
    )
}

export default Header