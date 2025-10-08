import { axiosClient } from '@/libs/axiosClient'

interface LoginData {
  email: string
  password: string
}

interface RegisterData extends LoginData {
  confirmPassword: string
}

export const AuthService = {
  async login(data: LoginData) {
    const res = await axiosClient.post('/auth/login', data)
    return res.data
  },

  async register(data: RegisterData) {
    const res = await axiosClient.post('/auth/register', data)
    return res.data
  },
}
