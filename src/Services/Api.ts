import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Api = axios.create({
  baseURL: 'http://43.204.36.247:8000/',
});

// Interceptor to attach the JWT token to the request headers
Api.interceptors.request.use(
  async (config) => {
    try {
      const token = await AsyncStorage.getItem('jwtToken');
      if (token) {
        config.headers['x-access-token'] = token;
      }
    } catch (error) {
      console.log(error,"Token Error")
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default Api;
