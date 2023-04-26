import axios from "axios";

const url = "http://127.0.0.1:5000/"; 
 export function postTicketData(ticket) {

  return axios.post(url + "FlightPrice", ticket);
}





  /* const ticketdata = {
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

  

  timeContent.data.forEach((c) => {
    ticketdata.Airline.push(c.Airline);
    ticketdata.Date_of_Journey.push(c.Date_of_Journey);
    ticketdata.Source.push(c.Source);
    ticketdata.Destination.push(c.Destination);
    ticketdata.Route.push(c.Route);
    ticketdata.Dep_Time.push(c.Dep_Time);
    ticketdata.Arrival_Time.push(c.Arrival_Time);
    ticketdata.Duration.push(c.Duration);
    ticketdata.Total_Stops.push(c.Total_Stops);
    ticketdata.Additional_Info.push(c.Additional_Info);
    ticketdata.Price.push(+c.Price);
  });
  console.log(ticketdata); */
  

/* export function postTicketnewData(oldContent) { */
  /* const ticketdata1 = {
    Airline1: [],
    Date_of_Journey1: [],
    Source1: [],
    Destination1: [],
    Route1: [],
    Dep_Time1: [],
    Arrival_Time1: [],
    Duration1: [],
    Total_Stops1: [],
    Additional_Info1: [],
  };

  oldContent.data.forEach((c) => {
    ticketdata1.Airline1.push(c.Airline1);
    ticketdata1.Date_of_Journey1.push(c.Date_of_Journey1);
    ticketdata1.Source1.push(c.Source1);
    ticketdata1.Destination1.push(c.Destination1);
    ticketdata1.Route1.push(c.Route1);
    ticketdata1.Dep_Time1.push(c.Dep_Time1);
    ticketdata1.Arrival_Time1.push(c.Arrival_Time1);
    ticketdata1.Duration1.push(c.Duration1);
    ticketdata1.Total_Stops1.push(c.Total_Stops1);
    ticketdata1.Additional_Info1.push(c.Additional_Info1);
  });
  console.log(ticketdata1); */
  /* return axios.post(url + "/FlightPrice", oldContent);
} */
