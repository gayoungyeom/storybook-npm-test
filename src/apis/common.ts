import axios from "axios"

export const axiosInstance = axios.create({
  baseURL: `https://api.restful-api.dev`,
  timeout: 10 * 1000,
})
