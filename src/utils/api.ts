import axios, { AxiosInstance } from 'axios';

const API_BASE_URL = "https://core-sport-api.zarebin.ir/api/football/fixtures/";

// date format: yyyy-mm-dd
const datePattern: RegExp = /^(?:19|20)\d\d-(?:(?:0[1-9])|(?:1[0-2]))-(?:(?:0[1-9])|(?:[1-2][0-9])|(?:3[0-1]))$/;

const api: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
});

// Define your API methods
const apiService = {
  getLiveScores: async (data: typeof datePattern) => { 
    try {
      const response = await api.get(`${API_BASE_URL}?date=${data}`);
      return response.data;
    } catch (error) {
      throw new Error('اطلاعاتی یافت نشد.');
    }
  },

};

export default apiService;
