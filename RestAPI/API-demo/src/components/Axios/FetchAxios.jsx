import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Card from '../Cards';
function FetchDataAxios() {
    const[data, setData] = useState(null)
    useEffect(() => {
        axios
          .get('https://jsonplaceholder.typicode.com/users')
          .then(res =>{
            console.log(res)
            return res
          })
          .then(resData => setData(resData.data))
          .catch(err => console.error(err));

        },[])
  return (
    <div>
        <h1>FetchDataAxios</h1>
        <div style={{display:'flex', flexWrap:'wrap', justifyContent:'center'}}>
          {data && data.map((item) => <Card key={item.id} name={item.name} email={item.email} userName={item.username} phoneNumbre={item.phone}/>)}
        </div>
    </div>
  )
}

export default FetchDataAxios