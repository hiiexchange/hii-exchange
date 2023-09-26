/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import axios from "axios";

export const API_URL = "https://hi-exchange-backend.onrender.com";

export const axios_server = axios.create({
  baseURL: API_URL,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "content-type": "application/json",
  },
});

axios_server.interceptors.request.use(function (request) {
  const isAuthUrl = request.url?.startsWith("/auth");

  if (isAuthUrl) return request;

  const token = JSON.parse(localStorage.getItem("user")!).accessToken;

  if (!isAuthUrl && token) {
    request.headers.Authorization = `Bearer ${token}`;
  }

  return request;
});
