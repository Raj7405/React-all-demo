import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store from './store.jsx'
import { Provider } from 'react-redux'

// console.log('intial state', store.getState())

// const unsubscribe = store.subscribe(() =>
//   console.log('State after dispatch: ', store.getState())
// )

// store.dispatch({type:'todos/todoAdded', payload:'Learn JavaScript'})
// store.dispatch({type:'todos/todoAdded', payload:'Learn React Js'})
// store.dispatch({type:'todos/todoAdded', payload:'Learn React Router'})
// store.dispatch({type:'todos/todoAdded', payload:'Learn Redux'})
// store.dispatch({type:'todos/todoAdded', payload:'Learn Redux-toolkit'})

// store.dispatch({ type: 'todos/todoToggled', payload: 0 })
// store.dispatch({ type: 'todos/todoToggled', payload: 1 })
// store.dispatch({ type: 'todos/todoToggled', payload: 2 })

// store.dispatch({ type: 'filters/statusFilterChanged', payload: 'Active' })

// store.dispatch({
//   type: 'filters/colorFilterChanged',
//   payload: { color: 'red', changeType: 'added' }
// })


// unsubscribe() 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
