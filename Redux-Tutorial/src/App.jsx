import { useEffect, useState } from 'react'
import Header from './feature/header/Header'
import TodoList from './feature/todos/TodoList'
import Footer from './feature/footer/Footer'


function App() {
  // useEffect(() =>{ 
  //   localStorage.setItem('todos', JSON.stringify([
  //     {
  //       todos:{
  //         id:0, 
  //         text: 'Learn JavaScript',
  //         completed: true,
  //       } 
  //     }
  //   ]))  
  // },[])

  return (
    <div className="App">
      <nav>
        <section>
          <h1>Redux Fundamentals Example</h1>
          <div className="navContent">
            <div className="navLinks"></div>
          </div>
        </section>
      </nav>
      <section className="medium-container">
          <h2>Todos</h2>
          <div className="todoapp">
            <Header />
            <TodoList />
            <Footer />
          </div>
      </section>
    </div>
  )
}

export default App
