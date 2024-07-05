import React, { useEffect, useState } from "react";

function Table({ filterData }) {
  const [tableData, setTableData] = useState(filterData || []);
  useEffect(() => {
    setTableData(filterData);
  }, [filterData]);
  return (
    <div style={{ margin: 10, height:100}}>
      {tableData.length ? (
        <table className="table" border={1} style={{width:500}}>
          <thead>
            <tr>
              {Object.keys(tableData[0]).map((item, index) => {
                return <th key={index}>{item}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {tableData.map((item,index,self) => {
              return (
                <tr key={item.id}>                    
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.city}</td>
                  <td>{item.category}</td>
                  <td>{item.type}</td>
                  <td>{JSON.stringify(item.active)}</td>
                  <td>{item.state}</td>
                  <td>{item.country}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <h2 style={{ textAlign: "center" }}>No Match found!</h2>
      )}
    </div>
  );
}

export default Table;
