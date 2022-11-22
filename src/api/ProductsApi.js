import axios from 'axios';

export const productsApi = axios.create({
  baseURL: 'https://api.escuelajs.co/api/v1/'
})