import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: import.meta.mode === "production" ? "https://hashsports-server-hmcxdehwapcwa2a4.canadacentral-01.azurewebsites.net/api/" : "/api",
    withCredentials: true
})

export default axiosInstance;