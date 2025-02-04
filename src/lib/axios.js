import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: import.meta.mode === "development" ? 'http://localhost:8000/api/' : 'http://hashsports-server-hmcxdehwapcwa2a4.canadacentral-01.azurewebsites.net/api',
    withCredentials: true,
})

export default axiosInstance;