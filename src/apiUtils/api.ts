import axios from "axios";

export const http = axios.create({
  baseURL: process.env.REACT_APP_DATA_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

http.interceptors.request.use((config) => {
  if (!!process.env.REACT_APP_DATA_APP_TOKEN)
    config.headers["X-App-Token"] = process.env.REACT_APP_DATA_APP_TOKEN;
  return config;
});

export const get = ({ url }: { url: string }) => http.get(url);
