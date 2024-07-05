import { useState } from 'react'
import Table from './components/Table'
import FiltlterButtons from './components/FiltlterButtons'
// import Old from './components/Old'

const defaultData = [
  {
    id : 1,
    name : 'rajendra',
    city : 'ankleshwar',
    category:'one',
    type : 'A',
    active : 'true',
    state : 'gujarat',      
  },
  {
    id : 2,
    name : 'sammed',
    city : 'ankleshwar',
    category:'one',
    type : 'B',
    active : 'false',
    state : 'gujarat',
  },
  {
    id : 3,
    name : 'saurabh',
    city : 'bharuch',
    category:'two',
    type : 'A',
    active : 'true',
    state : 'gujarat',
  },
  {
    id : 4,
    name : 'raj',
    city : 'surat',
    category:'two',
    type : 'C',
    active : 'true',
    state : 'gujarat',
  },
  {
    id : 5,
    name : 'mayur',
    city : 'surat',
    category:'one',
    type : 'C',
    active : 'false',
    state : 'gujarat',
  },
]

function App() {
  const [userData, setData] =  useState(defaultData || [])
  return (
    <div className='flex flex-col flex-center'>
      <FiltlterButtons defaultData={defaultData} data={userData} setData={setData}/>
      <h2>Reference Table</h2>
      <Table filterData={defaultData}/>
    </div>
  )
}

export default App
