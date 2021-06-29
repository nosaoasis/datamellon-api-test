import React, { useContext, useState } from "react";
import { DataContext } from "../Context";
import Select from "react-select";
import { Bar, Pie, Line } from "react-chartjs-2";

const ResponseDataComponent = ({ data }) => {
  const {
    salesData,
    salesDate,
    salesAndProfit,
    allCity,
    allState
  } = useContext(DataContext);

  const [state, setState] = useState(allState);

  const allStateOption = () => {
    let allStateOption = [
      ...allState.map(item => {
        return { value: item, label: item };
      })
    ];
    return (allStateOption = allStateOption.sort());
  };

  const handleStateChange = selectedOption => {
    setState(selectedOption);

    let allStateCities = [
      ...new Set(
        salesData.map(item => {
          if (item.State === selectedOption.value) {
            return { value: item.City, label: item.City };
          }
        })
      )
    ];
    allStateCities = allStateCities.sort();
    allStateCities = allStateCities.slice(0, -1);

    let uniqueStates = allStateCities
      .reduce((map, item) => map.set(item.value, item), new Map())
      .values();

    return uniqueStates;
  };

  return (
    <>
      <div className="game">
        <h2>Filter Data</h2>
        <div className="filter-form">
          <Select
            value={state}
            onChange={handleStateChange}
            options={allStateOption()}
          />
          <button type="submit">submit</button>
        </div>
      </div>
    </>
  );
};

export default ResponseDataComponent;
