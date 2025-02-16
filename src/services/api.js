import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const fetchHolidays = async (params) => {
  try {
    const { data } = await api.get('/holidays/', { params });
    return data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to fetch holidays');
  }
};
