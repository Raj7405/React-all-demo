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
    const [id, setId] = useState([])
    useEffect(() => {
        // console.log(filterCondition)
        let filteredData = defaultData;
        let tempData = [];

        console.log(Object.values(filterCondition).flat(Infinity))  
        for (const key in filterCondition) {
            // if (filterCondition[key].length) {
            //     filterCondition[key].map(keyToFind => {
            //         console.log(keyToFind)
            //         setFilterData(defaultData.filter(item => {
            //             return item[key] === keyToFind  
            //         }));
            //         console.log(filterData)
            //     })
            // }
            // if (filterCondition[key].length) {
                // let tempCondition = Object.values(filterCondition).flat(Infinity)
            //     console.log(Object.values(filterCondition).flat(Infinity))
            //     tempData = tempCondition.map(item => defaultData.filter(obj => Object.values(obj).includes(item)))
            //     // filteredData = filterCondition[key].map(keyToFind  => defaultData.filter(item => item[key] === keyToFind))
            //     filteredData = defaultData.filter(itemObj => filterCondition[key].includes(itemObj[key]))
            // }
            if(filterCondition[key].length){
                tempData.push(filteredData.filter(obj => {
                    // if(filterCondition[key].includes(obj[key])){

                    //     let uniqueId = [...new Set([...id, obj.id])]
                    //     console.log(uniqueId)
                    //     setId(uniqueId)
                    // }
                    return filterCondition[key].includes(obj[key])
                }))
            }
        }
     
        // if(filterCondition2.length){
        //    console.log(filterCondition2.map(key => defaultData.filter(obj => Object.values(obj).includes(key))) )
        // }
        // console.log(filteredData.flat(Infinity))
        console.log(tempData.flat(Infinity))
        const keys = ['id', 'name'];    
        const filteredDataId = tempData.flat(Infinity).filter((value, index, self) =>
            self.findIndex(v => keys.every(k => v[k] === value[k])) === index
          );
          
          console.log(filteredDataId);
        // setFilterData(filteredData.length ? filteredData.flat(Infinity) : data);
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