import React, { useEffect, useState } from 'react';
import Table from './Table';

function FiltlterButtons({ defaultData, data }) {
    const [filterData, setFilterData] = useState(data);
    const [filterCondition, setFilterCondition] = useState({
        city: [],
        state: [],
        type: [],
        category: [],
        active: [],
    });

    useEffect(() => {
        let filteredData = defaultData;
        Object.keys(filterCondition).forEach(key => {
            if (filterCondition[key].length) {
                filteredData = filteredData.filter(item =>
                    filterCondition[key].includes(item[key])
                );
            }
        })
        setFilterData(filteredData);
    }, [filterCondition, defaultData]);

    const uniqueItem = key => {
        const itemArr = data.map(item => item[key]);
        return [...new Set(itemArr)];
    };

    const handleSelectedKey = e => {
        const key = e.target.name;
        const value = e.target.id;
        setFilterCondition(prevState => ({
            ...prevState,
            [key]: prevState[key].includes(value)
                ? prevState[key].filter(item => item !== value)
                : [...prevState[key], value],
        }));
    };

    return (
        <div>
            <div className='flex gap'>
                {Object.keys(data[0])
                    .filter(keysArr => keysArr !== 'id' && keysArr !== 'name')
                    .map((keys, index) => (
                        <div id={keys} key={keys + index} className='flex flex-col gap'>
                            {uniqueItem(keys).map((item, i) => (
                                <div key={item + i}>
                                    <input
                                        type='checkbox'
                                        id={item}
                                        name={keys}
                                        onChange={handleSelectedKey}
                                    />
                                    <label htmlFor={item}>{item}</label>
                                </div>
                            ))}
                        </div>
                    ))}
            </div>
            <Table filterData={filterData} />
        </div>
    );
}

export default FiltlterButtons;
