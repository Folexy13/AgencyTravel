import axios from "axios";
const url = process.env.BACKEND_URL || "http://localhost:8080/";
const instance = axios.create({
  baseURL: `${url}`,
});

export default instance;
