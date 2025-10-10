import { axiosClient } from '@/libs/axiosClient';
import type { LoginRequest, RegisterRequest, UserResponse } from './types';

export const AuthService = {
  async login(data: LoginRequest): Promise<UserResponse> {
    console.log("Estoy en auth.service, data: ", data);
    const res = await axiosClient.post('/auth/login', data);
    console.log("Este es el res: ", res)
    const token = res.data?.token;
    console.log("Este es el token: ", token);
    if (token) {
      localStorage.setItem('auth-token', token);
    }
    return res.data;
  },

  async register(data: RegisterRequest): Promise<UserResponse> {
    const res = await axiosClient.post('/auth/register', data);
    const token = res.data?.token;

    if (token) {
      localStorage.setItem('auth-token', token);
    }

    return res.data;
  },

  async getProfile(): Promise<UserResponse> {
    const res = await axiosClient.get('/auth/me');
    return res.data;
  },

  logout() {
    localStorage.removeItem('auth-token');
  },
};
