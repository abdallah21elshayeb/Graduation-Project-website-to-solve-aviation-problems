import axios from "axios";

const url = "http://127.0.0.1:5000/" /* URL of BACK-END (PYTHON) */

   
   export function postData(flight) {
     return axios.post(url + "FleetAssignment", flight);
    }
    export function postDataFleet(fleet) {
  return axios.post(url + "FleetAssignment", fleet);
}

export function getAirports() {
  return axios.get(url + "FleetAssignment");
}

export function postResult() {
  return axios.post(url + "Solution");
} 
/* REQUEST OF SOLUTION FROM PYTHON */
export function postSolve(solves) {
  return axios.post(url + "Solution", solves);
}



/* const url = "https://jsonplaceholder.typicode.com/";
 */
/* const  url="https://jsonplaceholder.typicode.com/" */

/*  const  url="https://jsonplaceholder.typicode.com/"
 */
/* export function postData(flight) {
  return axios.post(url + "posts", flight);
}
export function postDataFleet(fleet) {
  return axios.post(url + "posts", fleet);
} */
/* export function getUsers() {
    return axios.get(url1+'Users')
} */
/* export function getAirports() {
  return axios.get(url + "users");
} */
/* export function getAirports() {
  return axios.get(url + "FleetAssignment");
} */

/* export function getResult() {
  return axios.get(url + "users");
} */