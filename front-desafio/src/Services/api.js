import axios from "axios";

const api = axios.create({
  baseURL: "https://desafiounicad-production.up.railway.app",
});

export default api;
