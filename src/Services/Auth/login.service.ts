import axios, { AxiosResponse, AxiosError } from 'axios';

interface LoginResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export const loginService = async (phoneNumber: string,password: string): Promise<LoginResponse> => {
  try {
    const response: AxiosResponse = await axios.post('http://13.235.13.201:8000/auth/login/', {
      phoneNumber: phoneNumber,
      password: password,
    });
    return { success: true, data: response.data };
  } catch (error) {
    const axiosError = error as AxiosError;
    const errorMessage = axiosError.response?.data || 'An error occurred';

    return { success: false, error: errorMessage };
  }
};