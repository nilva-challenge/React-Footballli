import axios, { AxiosInstance } from 'axios';

const API_BASE_URL = "https://core-sport-api.zarebin.ir/api/football/fixtures/";

const api: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
});

// Define your API methods
const apiService = {
  getLiveScores: async (data: string) => { 
    try {
      const response = await api.get(`${API_BASE_URL}?date=${data}`);
      return response.data;
    } catch (error) {
      throw new Error('اطلاعاتی یافت نشد.');
    }
  },

};

export default apiService;
