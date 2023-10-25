import axios, { AxiosResponse, AxiosError } from 'axios';
import Api from '../Api';
interface AuthResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export const loginService = async (phoneNumber: string,password: string): Promise<AuthResponse> => {
  try {
    const response: AxiosResponse = await Api.post('auth/login/', {
      phoneNumber: phoneNumber,
      password: password,
    });
    return { success: true, data: response.data };
  } catch (error) {
    const axiosError = error as AxiosError;
    const errorMessage = axiosError.response?.data || 'An error occurred';

    return { success: false, error: JSON.stringify(errorMessage) };
  }
};

export const RegisterService = async (username:string,phoneNumber: string,password: string): Promise<AuthResponse> => {
  try {
    const response: AxiosResponse = await Api.post('auth/register/', {
      username:username,
      phoneNumber: phoneNumber,
      password: password,
    });
    return { success: true, data: response.data };
  } catch (error) {
    const axiosError = error as AxiosError;
    const errorMessage = axiosError.response?.data || 'An error occurred';

    return { success: false, error: JSON.stringify(errorMessage) };
  }
};