export interface UserData {
    id: string;
    email: string;
    username: string;
    roles: [];
    experience: USER_EXPERIENCE;
  }
  
export enum USER_EXPERIENCE{
  NOVICE,
  EXPERIENCED,
  OLD
}

export interface LoginRequest{
    email: string;
    password: string;
}

export interface LoginResponse {
    userId: string;
    token: string;
  }
  

  export interface AuthTokenPayload extends UserData {
    exp: number;
    iat: number;
    userId: string;
    sub: string; 
  }
  
  export interface AuthContextType {
    currentUser: UserData | null;
    id: string | null;
    token: string | null;
    loading: boolean;
    error: string | null;
    login: (email: string, password: string) => Promise<UserData>;
    logout: () => void;
    getAuthHeaders: () => Record<string, string>;
    checkAuthStatus: () => void;
  }