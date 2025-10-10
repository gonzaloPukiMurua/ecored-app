import { axiosClient } from '@/libs/axiosClient'
import type { LoginRequest, RegisterRequest, UserResponse } from './types'

export const AuthService = {
  async login(data: LoginRequest): Promise<UserResponse> {
    const res = await axiosClient.post('/auth/login', data)
    return res.data
  },

  async register(data: RegisterRequest): Promise<UserResponse> {
    const res = await axiosClient.post('/auth/register', data)
    return res.data
  },
}