import { useState } from 'react'
import Table from './components/Table'
import FiltlterButtons from './components/FiltlterButtons'

const defaultData = [
  {
    id : 1,
    name : 'rajendra',
    city : 'dellas',
    category:'one',
    type : 'A',
    active : 'false',
    state : 'gujarat',      
  },
  {
    id : 2,
    name : 'sammed',
    city : 'dellas',
    category:'one',
    type : 'B',
    active : 'false',
    state : 'gujarat',
  },
  {
    id : 3,
    name : 'saurabh',
    city : 'san francisco',
    category:'one',
    type :'B',
    active : 'true',
    state : 'gujarat',
  },
  {
    id : 4,
    name : 'raj',
    city : 'denver',
    category:'two',
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
      {/* <FilterButtons2  defaultData={defaultData} data={userData} setData={setData}/> */}
      <div style={{height:100}}></div>
      <h2>Reference Table</h2>
      <Table filterData={defaultData}/>
    </div>
  )
}

export default App
