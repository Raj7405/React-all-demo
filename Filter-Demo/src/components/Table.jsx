import React, { useEffect, useState } from 'react'

function Table({filterData}) {
    const [tableData, setTableData] = useState(filterData || [])
    useEffect(() => {
        setTableData(filterData)
    })

    // console.log('re-render', tableData)
    return (
        <div>
            <table className='table' border={1}>
                <thead>
                    <tr>
                    {Object.keys(tableData[0])
                        .map((item, index) => {
                            return <th key={index}>{item}</th>
                        })
                    } 
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((item, index) => {
                        return ( 
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.city}</td>
                                <td>{item.category}</td>
                                <td>{item.type}</td>
                                <td>{JSON.stringify(item.active)}</td>
                                <td>{item.state}</td> 
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
     )
}

export default Table