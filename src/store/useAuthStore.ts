import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { AuthService } from '@/services/auth/auth.service'
import type { LoginRequest, RegisterRequest, UserResponse } from '@/services/auth/types'

interface AuthState {
  user: UserResponse | null
  token: string | null
  loading: boolean
  error: string | null

  login: (data: LoginRequest) => Promise<void>
  register: (data: RegisterRequest) => Promise<void>
  logout: () => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      loading: false,
      error: null,

      // -------------------------------
      // LOGIN
      // -------------------------------
      login: async (data: LoginRequest) => {
        set({ loading: true, error: null })
        try {
          const res = await AuthService.login(data)

          // Guardar usuario + token
          set({ user: res, token: res.token || null, loading: false })
        } catch (err: any) {
          set({
            error: err.response?.data?.message || 'Error al iniciar sesión',
            loading: false,
          })
        }
      },

      // -------------------------------
      // REGISTER
      // -------------------------------
      register: async (data: RegisterRequest) => {
        set({ loading: true, error: null })
        try {
          const res = await AuthService.register(data)
          set({ user: res, token: res.token || null, loading: false })
        } catch (err: any) {
          set({
            error: err.response?.data?.message || 'Error al registrarse',
            loading: false,
          })
        }
      },

      // -------------------------------
      // LOGOUT
      // -------------------------------
      logout: () => {
        set({ user: null, token: null })
      },
    }),
    {
      name: 'auth-storage', // 👈 persistencia local (localStorage)
    }
  )
)
