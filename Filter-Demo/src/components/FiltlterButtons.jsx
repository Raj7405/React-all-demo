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
        let filteredData = defaultData;
        let tempData = [];

        console.log(Object.values(filterCondition).flat(Infinity))
        Object.keys(filterCondition).forEach( key => {
            if(filterCondition[key].length){
                tempData.push(filteredData.filter(obj => filterCondition[key].includes(obj[key])))
            }
        })
        const keys = ['id', 'name'];    
        const filteredDataId = tempData.flat(Infinity).filter((value, index, self) => self.findIndex(v =>v.id === value.id) === index);
          
        setFilterData(filteredDataId.length ? filteredDataId.flat(Infinity) : data);

    },[filterCondition, defaultData])

 
    const uniqueItem = (key) => {
        const itemArr = data.map(item => item[key]);
        return [...new Set(itemArr)];
    }  
    
    const handleSelectedKey = (e) => {
        const key = e.target.name;
        const value = e.target.id;
        console.log(filterCondition[key].includes(value))
        setFilterConidition(prevState => ({
            ...prevState,
            [key]: prevState[key].includes(value) ?  prevState[key].filter(item => item !== value): [...prevState[key], value],
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