import React, { useEffect, useState } from 'react'
import Table from './Table'

function FiltlterButtons({defaultData, data}) {
    const [filterData, setFilterData] = useState(data) 

    const [filterCondition, setFilterConidition] = useState({
        city:[],
        state:[],
        type:[],
        category:[],
        active:[],
        state:[],
    })

    useEffect(() => {
        // console.log(filterCondition)
        let filteredData = defaultData;

        for (const key in filterCondition) {
            console.log(filterCondition[key])    
            // if (filterCondition[key].length) {
            //     filterCondition[key].map(keyToFind => {
            //         console.log(keyToFind)
            //         setFilterData(defaultData.filter(item => {
            //             return item[key] === keyToFind  
            //         }));
            //         console.log(filterData)
            //     })
            // }
            if (filterCondition[key].length) {
                filterCondition[key].map(keyToFind => filteredData = defaultData.filter(item => defaultData.includes(keyToFind++)))
            }
        }
        console.log(filteredData)

        setFilterData(filteredData.length ? filteredData : data);
    },[filterCondition, defaultData])

 
    const uniqueItem = (key) => {
        const itemArr = data.map(item => item[key]);
        return [...new Set(itemArr)];
    }  
    
    const handleSelectedKey = (e) => {
        const key = e.target.name;
        const value = e.target.id;
        setFilterConidition(prevState => ({
            ...prevState,
            [key]: [...prevState[key], value]
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
                                            <input type='checkbox' id={item} name={keys} onChange={handleSelectedKey}/>
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