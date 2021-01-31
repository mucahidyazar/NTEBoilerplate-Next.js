import axios from 'axios'

export const firstApi = axios.create({
  baseURL: `${process.env.BASE_URL}`,
})

export const secondApi = axios.create({
  baseURL: 'https://api2.example.com/',
})
