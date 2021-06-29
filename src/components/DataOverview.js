import React, { Component, useContext, useState, useEffect } from "react";
import { DataContext } from "../Context";
import { Bar } from "react-chartjs-2";

const DataOverview = () => {
  const { salesData, salesDate, salesAndProfit } = useContext(DataContext);

  const totalSalesArray = salesAndProfit.map(item => item.totalYearSale);
  const totalProfitArray = salesAndProfit.map(item => item.totalYearProfit);

  let salesChartData = {
    labels: salesDate,
    datasets: [
      {
        label: `Sales  ${salesDate[0]} - ${salesDate[salesDate.length - 1]}`,
        data: totalSalesArray,
        backgroundColor: ["#23AAF2"]
      },
      {
        label: `Sales Profit ${salesDate[0]} - ${
          salesDate[salesDate.length - 1]
        }`,
        data: totalProfitArray,
        backgroundColor: ["#FE777B"]
      }
    ]
  };

  return (
    <>
      <div className="dataoverview-container">
        <h1>sales overview</h1>
        <h3>
          {salesData.length} sales recorded between {salesDate[0]} and{" "}
          {salesDate[salesDate.length - 1]}
        </h3>
        <div className="dataoverview-flex-container">
          <div className="dataOverview-chart">
            <Bar
              data={salesChartData}
              width={100}
              height={50}
              options={{
                title: {
                  display: true,
                  text: `Sales and Profit ${salesDate[0]} - ${
                    salesDate[salesDate.length - 1]
                  }`,
                  fontSize: 50
                },
                legend: {
                  display: true,
                  position: "right",
                  labels: {
                    fontColor: "#000"
                  }
                }
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DataOverview;
