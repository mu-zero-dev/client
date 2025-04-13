import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

// Prepaid Card API
export const createPrepaidCard = async (data: any) => {
    const response = await axios.post(`${API_BASE_URL}/cards`, data);
    return response.data;
};

export const getPrepaidCards = async () => {
    const response = await axios.get(`${API_BASE_URL}/cards`);
    return response.data;
};

// Wallet API
export const createWallet = async (data: any) => {
    const response = await axios.post(`${API_BASE_URL}/wallets`, data);
    return response.data;
};

export const getWallets = async () => {
    const response = await axios.get(`${API_BASE_URL}/wallets`);
    return response.data;
};