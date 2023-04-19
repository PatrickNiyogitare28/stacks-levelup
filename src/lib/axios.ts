import { storage } from '@/utils/frontend/storage';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: '/api',
  headers: {
    "Content-Type":"application/json",
    Authorization: `Bearer ${storage.getAccessToken()}`,
  },
});

export default axiosInstance;
