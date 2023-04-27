import axios from "axios";
import { baseUrl } from "../config/url";



const instance = axios.create({
  baseURL: baseUrl,
  headers: {
    "x-rapidapi-host": "v3.football.api-sports.io",
    "x-rapidapi-key": "8eb1386fdb90f3363e5aa97b054249e2"
  },
});

export default instance;