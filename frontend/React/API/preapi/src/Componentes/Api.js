import axios from "axios";

const api = axios.create({
  baseURL: "https://thronesapi.com/api/v2",
});

export default api;