import React, { useEffect, useState } from 'react'
import Table from './Table'

function FiltlterButtons({defaultData, data, setData}) {
    const [filterData, setFilterData] = useState(data) 
    // const [filterCondition, setFilterConidition] = useState([])
    
    // useEffect(() => {
    //     setData(filterData)
    // })
    const uniqueItem = (key) => {
        const itemArr = data.map(item => item[key])
        return [...new Set(itemArr)]  
    }

    const filterOutData = (selectedKey, data) =>{
        let temp = data.filter((item) => Object.values(item).includes(selectedKey))
        return (temp.length ? temp : null)
    }  
    
    const handleSelectedKey = (e) => {
        // let newFiltterData = d;
        if(e.target.name == e.target.parentElement.parentElement.id){    
            console.log(filterOutData(e.target.id, filterData) ?? filterOutData(e.target.id, defaultData))
        }
        setFilterData(filterOutData(e.target.id, filterData) ?? filterOutData(e.target.id, defaultData))
        // console.log(e.target.name == e.target.parentElement.parentElement.id)
    }
    // console.log(filterData.filter((item) =>  Object.values(item).includes('surat'))) 
    // console.log(filterData)

    return (
        <div>
            <div className='flex gap'>
                {Object
                    .keys(data[0])
                    .filter((keysArr) => keysArr!='id' && keysArr!='name')
                    .map((keys, index) => {
                        // console.log(keys)
                        return(
                            <div id={keys} key={keys+index} className='flex flex-col gap'>
                                {uniqueItem(keys).map((item,i) => {
                                    return (
                                        <div key={item+i}>
                                            <input type='radio' id={item} name={keys} onClick={handleSelectedKey}/>
                                            <label htmlFor={item}>{item}</label>
                                        </div>
                                    )
                                })}
                            </div>
                        ) 
                    }
                )}
            </div>
            <Table filterData={filterData}/>
        </div>
    )
}

export default FiltlterButtons