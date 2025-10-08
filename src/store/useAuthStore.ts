import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { AuthService } from '@/services/auth'

interface User {
  id: string
  name: string
  email: string
}

interface AuthState {
  user: User | null
  token: string | null
  loading: boolean
  error: string | null

  login: (email: string, password: string) => Promise<void>
  register: (email: string, password: string, confirmPassword: string) => Promise<void>
  logout: () => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      loading: false,
      error: null,

      login: async (email, password) => {
        set({ loading: true, error: null })
        try {
          const res = await AuthService.login({ email, password })
          
          set({ user: res.user, token: res.token, loading: false })
        } catch (err: any) {
          set({ error: err.response?.data?.message || 'Error al iniciar sesión', loading: false })
        }
      },

      register: async (email, password, confirmPassword) => {
        set({ loading: true, error: null })
        try {
          const res = await AuthService.register({ email, password, confirmPassword })
          set({ user: res.user, token: res.token, loading: false })
        } catch (err: any) {
          set({ error: err.response?.data?.message || 'Error al registrarse', loading: false })
        }
      },

      logout: () => set({ user: null, token: null }),
    }),
    { name: 'auth-storage' }
  )
)
