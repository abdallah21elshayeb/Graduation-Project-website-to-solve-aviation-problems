import axios from "axios";

const  url = "http://127.0.0.1:5000/";

export function postRouting(routing){
    return axios.post(url + "ACRouting", routing);
}