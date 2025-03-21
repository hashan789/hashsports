import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: import.meta.mode === "development" ? "http://localhost:5000/api/" : "https://hashsports-server-hmcxdehwapcwa2a4.canadacentral-01.azurewebsites.net/api",
    withCredentials: true
})

export default axiosInstance;