import { useState } from 'react'
import Table from './components/Table'
import FiltlterButtons from './components/FilterButtons'

const defaultData = [
  {
    id : 1,
    name : 'rajendra',
    city : 'dellas',
    category:'one',
    type : 'A',
    active : 'false',
    state : 'gujarat',  
    country: 'india',    
  },
  {
    id : 2,
    name : 'sammed',
    city : 'dellas',
    category:'one',
    type : 'B',
    active : 'false',
    state : 'gujarat',
    country: 'india', 
  },
  {
    id : 3,
    name : 'saurabh',
    city : 'san francisco',
    category:'one',
    type :'B',
    active : 'true',
    state : 'goa',
    country: 'india', 
  },
  {
    id : 4,
    name : 'raj',
    city : 'denver',
    category:'two',
    type : 'C',
    active : 'false',
    state : 'gujarat',
    country: 'india', 
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