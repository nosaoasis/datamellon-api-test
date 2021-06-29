import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import {
  DataOverview,
  ResponseDataComponent,
  Loading
} from "../components/index";
import { DataContext } from "../Context";

// const baseUrl =
//   "https://g54qw205uk.execute-api.eu-west-1.amazonaws.com/DEV/stub";

const DataHome = () => {
  // const { loading, salesData, salesDate, salesAndProfit } = useContext(
  const { loading } = useContext(DataContext);
  console.log(loading);

  // const [loading, setLaoding] = useState(true);
  // const [sales, setSales] = useState([]);

  /*const fetchSalesData = async () => {
    try {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ angular_test: "angular-developer" })
      };

      let response = await fetch(baseUrl, requestOptions);
      let salesApiData = await response.json();
      console.log(salesApiData);

      

      // Filter City
      let allCity = [
        ...new Set(
          salesApiData.map(item => {
            return item["City"];
          })
        )
      ];
      allCity = allCity.sort();

      // Filter sales Year
      let salesDate = [
        ...new Set(
          salesApiData.map(item => {
            return item["Order Date"].split("/").pop();
          })
        )
      ];
      salesDate = salesDate.sort((a, b) => a - b);

      // Total Sales
      let totalSales = salesApiData.reduce((total, sales) => {
        total += parseFloat(sales.Sales);
        return total;
      }, 0);

      // Yearly total profit
      let totalProfit = salesApiData.reduce((total, sales) => {
        total += parseFloat(sales.Profit);
        return total;
      }, 0);

      // Yearly total sales
      let yearlySaleAndProfit = salesDate.map(item => {
        let saleValue = 0;
        let yearlyProfit = 0;
        salesApiData.map(saleData => {
          let itemSaleYear = saleData["Order Date"].split("/").pop();
          if (item === itemSaleYear) {
            saleValue += parseFloat(saleData.Sales);
            yearlyProfit += parseFloat(saleData.Profit);
          }
        });
        return {
          year: item,
          totalYearProfit: Number(yearlyProfit.toFixed(2)),
          totalYearSale: Number(saleValue.toFixed(2))
        };
      });
      console.log(yearlySaleAndProfit);

      setSales({
        loading: false,
        salesData: salesApiData,
        salesDate: salesDate,
        salesAndProfit: yearlySaleAndProfit
      });
    } catch (error) {
      setSales({
        loading: false
      });
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSalesData();
  }, []);*/

  if (loading) {
    return (
      <>
        <Loading />
      </>
    );
  }

  return (
    <>
      <div>
        {/* <Link to="/" className="btn-primary">
          Back Home
        </Link> */}

        <div className="homeComponent">
          <DataOverview />
          <ResponseDataComponent />
        </div>
      </div>
    </>
  );
};

export default DataHome;
