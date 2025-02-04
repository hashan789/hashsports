import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: import.meta.mode === "development" ? 'http://hashsports-server-hmcxdehwapcwa2a4.canadacentral-01.azurewebsites.net/api/' : '/api',
    withCredentials: true,
})

export default axiosInstance;