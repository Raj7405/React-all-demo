import React, { useEffect, useState } from 'react'
import Table from './Table'

function FiltlterButtons({defaultData, data}) {
    const [filterData, setFilterData] = useState(data) 
    // const [filterData2, setFilterData2] = useState(data) 
    const [filterCondition, setFilterConidition] = useState({})

    useEffect(() => {
        let filteredData = defaultData;

        for (const key in filterCondition) {
            if (filterCondition[key]) {
                filteredData = filteredData.filter(item => item[key] === filterCondition[key]);
            }
        }

        setFilterData(filteredData.length ? filteredData : null);
    },[filterCondition, defaultData])

 
    const uniqueItem = (key) => {
        const itemArr = data.map(item => item[key]);
        return [...new Set(itemArr)];
    }

    // const filterOutData = (selectedKey, data) =>{
    //     let temp = (data ? data : []).filter((item) => Object.values(item).includes(selectedKey))
    //     return (temp.length ? temp : null)
    // }  
    
    const handleSelectedKey = (e) => {
        const key = e.target.name;
        const value = e.target.id;
        setFilterConidition(prevState => ({
            ...prevState,
            [key]: value
        }));
    }


    return (
        <div>
            <div className='flex gap'>
                {Object
                    .keys(data[0])
                    .filter((keysArr) => keysArr!='id' && keysArr!='name')
                    .map((keys, index) => {
                        return(
                            <div id={keys} key={keys+index} className='flex flex-col gap'>
                                {uniqueItem(keys).map((item,i) => {
                                    return (
                                        <div key={item+i}>
                                            <input type='radio' id={item} name={keys} onChange={handleSelectedKey}/>
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