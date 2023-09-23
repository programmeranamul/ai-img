import axios from 'axios';
import { api } from '../data/BaseApi';

// Create an instance of Axios with common headers



const token = JSON.parse(localStorage.getItem("x")) || "";
const instance = axios.create({
  baseURL: api, // Replace with your API base URL
  headers: {
    'Authorization': 'Bearer '+ token, // Replace with your token
  },
});

export default instance;
