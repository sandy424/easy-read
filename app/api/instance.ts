import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://15.164.30.134:13001',
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// 응답 인터셉터: 401 일괄 처리
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      const isPublicPage = ['/', '/login', '/signup'].includes(window.location.pathname);
      if (!isPublicPage) {
        localStorage.removeItem('accessToken');
        window.location.href = '/login';
      }
    }
    return Promise.reject(error);
  }
);
