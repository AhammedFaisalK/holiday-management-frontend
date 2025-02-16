import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api/v1';

const holidayApi = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getHolidays = async (params) => {
  try {
    const response = await holidayApi.get('/holidays/', { params });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};