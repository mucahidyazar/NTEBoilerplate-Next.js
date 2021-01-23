import axios from 'axios'

export const firstApi = axios.create({
  baseURL: 'https://api.example.com/',
})

export const secondApi = axios.create({
  baseURL: 'https://api2.example.com/',
})
