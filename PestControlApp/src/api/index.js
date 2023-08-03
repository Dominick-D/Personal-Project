import axios from 'axios';

const API_BASE_URL = 'https://api.example.com'; // Replace with your API base URL

export const fetchEstimatedSalePrice = async (propertyId) => {
  const response = await axios.get(`${API_BASE_URL}/property/${propertyId}/estimatedSalePrice`);
  return response.data.estimatedSalePrice;
};

export const signIn = async (email, password) => {
  const response = await axios.post(`${API_BASE_URL}/auth/signin`, { email, password });
  return response.data.user;
};
