import axios from "axios";

const url = "http://127.0.0.1:5000/"; /* URL of BACK-END (PYTHON) */

export function postMarketData(market) {
  return axios.post(url + "MarketShare", market);
}

/* const marketdata = {
    Airline: [],
    Date_of_Journey: [],
    Source: [],
    Destination: [],
    Route: [],
    Dep_Time: [],
    Arrival_Time: [],
    Duration: [],
    Total_Stops: [],
    Additional_Info: [],
    Price: [],
  };

  content.data.forEach((c) => {
    marketdata.Airline.push(c.Airline);
    marketdata.Date_of_Journey.push(c.Date_of_Journey);
    marketdata.Source.push(c.Source);
    marketdata.Destination.push(c.Destination);
    marketdata.Dep_Time.push(c.Dep_Time);
    marketdata.Arrival_Time.push(c.Arrival_Time);
    marketdata.Duration.push(c.Duration);
    marketdata.Total_Stops.push(c.Total_Stops);
    marketdata.Additional_Info.push(c.Additional_Info);
    marketdata.Price.push(+c.Price);
  });

  console.log(marketdata); */
