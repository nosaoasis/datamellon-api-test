import React, { Component } from "react";
import { Loading } from "./components/index";

const DataContext = React.createContext();

const baseUrl =
  "https://g54qw205uk.execute-api.eu-west-1.amazonaws.com/DEV/stub?angular_test=angular-developer";

class DataProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      salesData: []
    };
  }

  fetchSalesData = async () => {
    try {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ angular_test: "angular-developer" })
      };

      let response = await fetch(baseUrl, requestOptions);
      let salesApiData = await response.json();

      // return salesApiData;

      // Filter City
      let allCity = [
        ...new Set(
          salesApiData.map(item => {
            return item["City"];
          })
        )
      ];
      allCity = allCity.sort();

      // Filter State
      let allState = [
        ...new Set(
          salesApiData.map(item => {
            return item["State"];
          })
        )
      ];
      allState = allState.sort();

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

      this.setState({
        loading: false,
        salesData: salesApiData, // total sales
        salesDate: salesDate, // sales year
        salesAndProfit: yearlySaleAndProfit,
        allCity: allCity,
        allState: allState
      });
    } catch (error) {
      this.setState = {
        loading: false
      };
      console.log(error);
    }
  };

  componentDidMount() {
    this.fetchSalesData();
  }

  if(loading) {
    return (
      <>
        <Loading />
      </>
    );
  }
  render() {
    return (
      <>
        <DataContext.Provider value={{ ...this.state }}>
          {this.props.children}
        </DataContext.Provider>
      </>
    );
  }
}

const DataConsumer = DataContext.Consumer;

// const withConsumer = Component => {
//   return function ConsumerWrapper(props) {
//     return (
//       <DataConsumer>
//         {value => <Component {...props} context={value} />}
//       </DataConsumer>
//     );
//   };
// };

export { DataProvider, DataConsumer, DataContext };
