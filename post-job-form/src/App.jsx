import './style/app.css'             
import Form from './components/Form'
import NavigationBtn from './components/NavigationBtn'
import SideBar from './components/SideBar'
import { useEffect, useState } from 'react'
import {useSelector} from 'react-redux'

function App() {
  const jobDescription = useSelector(store => store.jobDescription)

  return (
    <div className='appDiv'> 
      <div className='sideBar'>
        <h1>Side Nav Bar</h1>
        <SideBar/>
      </div>
      <div className='formSection'>
        <Form/>
        <NavigationBtn/>
      </div>

    </div>
  )
}

export default App
