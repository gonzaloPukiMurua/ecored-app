import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { AuthService } from '@/services/auth/auth.service';
import type { AxiosError } from 'axios';
import type { LoginRequest, RegisterRequest, UserResponse } from '@/services/auth/types';

interface AuthState {
  user: UserResponse | null;
  loading: boolean;
  error: string | null;

  login: (data: LoginRequest) => Promise<void>;
  register: (data: RegisterRequest) => Promise<void>;
  fetchUserProfile: () => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      loading: false,
      error: null,

      login: async (data) => {
        console.log("Estoy en el authStore.login. Este es data: ", data);
        set({ loading: true, error: null });
        try {
          await AuthService.login(data);
          const user = await AuthService.getProfile();
          set({ user, loading: false });
        } catch (err: unknown) {
          const error = err as AxiosError<{ message?: string }>;
          const message = error.response?.data?.message || 'Error al iniciar sesión';
          set({
            error: message,
            loading: false,
          });
        }
      },

      register: async (data) => {
        set({ loading: true, error: null });
        try {
          await AuthService.register(data);
          const user = await AuthService.getProfile();
          set({ user, loading: false });
        } catch (err: unknown) {
          const error = err as AxiosError<{ message?: string }>;
          const message = error.response?.data?.message || 'Error al registrarse';
          set({
            error: message,
            loading: false,
          });
        }
      },

      fetchUserProfile: async () => {
        try {
          const user = await AuthService.getProfile();
          set({ user });
        } catch {
          set({ user: null });
        }
      },

      logout: () => {
        AuthService.logout();
        set({ user: null });
      },
    }),
    { name: 'auth-storage' }
  )
);
