import React, { useEffect, useState } from "react";
import Table from "./Table";

function FilterButtons({ defaultData, data }) {
  const [filterData, setFilterData] = useState(defaultData);
  const [searchData, setSearchData] = useState(defaultData);
  const [searchActive, setSearchActive] = useState(false);
  const [filterCondition, setFilterCondition] = useState({});

  useEffect(() => {
    let filteredData = searchActive ? searchData : defaultData;
    Object.keys(filterCondition).forEach((key) => {
      if (filterCondition[key].length) {
        filteredData = filteredData.filter((item) =>
          filterCondition[key].includes(item[key])
        );
      }
    });
    setFilterData(filteredData);
  }, [filterCondition, defaultData, searchActive, searchData]);

  const uniqueItem = (key) => {
    const itemArr = data.map((item) => item[key]);
    return [...new Set(itemArr)];
  };

  const handleSelectedKey = (e) => {
    const key = e.target.name;
    const value = e.target.id;
    setFilterCondition((prevState) => ({
      ...prevState,
      [key]: prevState[key]?.includes(value)
        ? prevState[key]?.filter((item) => item !== value)
        : [...(prevState[key] || []), value],
    }));
  };

  const handleSearch = (e) => {
    let valueToSearch = e.target.value.trim();
    if (valueToSearch.length === 0) {
      setSearchActive(false);
      setSearchData(defaultData);
    } else {
      setSearchActive(true);
      const searchData = defaultData.filter((item) =>
        item.name.toLowerCase().includes(valueToSearch.toLowerCase())
      );
      setSearchData(searchData);
    }
  };

  return (
    <div>
      <div className="flex gap" style={{ justifyContent: "center" }}>
        {Object.keys(data[0])
          .filter((keysArr) => keysArr !== "id" && keysArr !== "name")
          .map((keys, index) => (
            <div id={keys} key={keys + index} className="flex flex-col gap">
              {uniqueItem(keys).map((item, i) => (
                <div key={item + i}>
                  <input
                    type="checkbox"
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
      <div style={{ textAlign: "center", margin: 25 }}>
        <input type="text" placeholder="Search Name..." onChange={handleSearch} />
      </div>
      <Table filterData={filterData} />
    </div>
  );
}

export default FilterButtons;
