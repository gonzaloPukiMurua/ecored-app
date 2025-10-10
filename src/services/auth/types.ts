export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  name: string
  email: string
  username: string
  password: string
  confirm_password: string
  zone_text?: string
}

export interface UserResponse {
  id: number;
  name: string;
  email: string;
  token?: string;
}