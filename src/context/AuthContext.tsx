
  import { createContext, useState, useEffect, useContext, ReactNode, JSX } from 'react';
  import { jwtDecode } from 'jwt-decode';
  import { AuthContextType, AuthTokenPayload, UserData, LoginResponse } from '../types/auth';
  import { getUserById, login } from '../api/api';
  const AuthContext = createContext<AuthContextType | null>(null);
  
  interface AuthProviderProps {
    children: ReactNode;
  }
  
  export const AuthProvider = ({ children }: AuthProviderProps): JSX.Element => {
    const [currentUser, setCurrentUser] = useState<UserData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const[id, setId] = useState<string| null>(null);
    const[token, setToken] = useState<string | null>(null);

  
    useEffect(() => {
      // Check for token in localStorage on initial load
      checkAuthStatus();
    }, []);
  
    const checkAuthStatus = (): void => {
      try {
        const token = localStorage.getItem('token');
        
        if (!token) {
          setCurrentUser(null);
          setLoading(false);
          return;
        }
  
        // Verify token hasn't expired
        const decodedToken = jwtDecode<AuthTokenPayload>(token);
        const currentTime = Date.now() / 1000;
        
        if (decodedToken.exp < currentTime) {
          // Token expired
          logout();
        } else {
          //TODO fetch user
        }
      } catch (err) {
        console.error("Token validation error:", err);
        logout();
      } finally {
        setLoading(false);
      }
    };
  
    const loginAuth = async (email: string, password: string): Promise<UserData> => {
      try {
        setLoading(true);
        setError(null);
        const data: LoginResponse = await login({email, password});
        setToken(data.token);
        localStorage.setItem('token', data.token);
        const decodedToken = jwtDecode<AuthTokenPayload>(data.token);

        setId(decodedToken.id);

        const userData = await getUserById(decodedToken.userId)
        let user: UserData =  userData;
        setCurrentUser(user);
        return userData;
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Authentication failed';
        setError(errorMessage);
        throw err;
      } finally {
        setLoading(false);
      }
    };
  
    const logout = (): void => {
      localStorage.removeItem('token');
      setCurrentUser(null);
    };
  
    const getAuthHeaders = (): Record<string, string> => {
      const token = localStorage.getItem('token');
      return token ? { Authorization: `Bearer ${token}` } : {};
    };
  
    const value: AuthContextType = {
      currentUser,
      loading,
      error,
      id,
      token,
      login: loginAuth,
      logout,
      getAuthHeaders,
      checkAuthStatus,
    };
  
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
  };
  
  export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) {
      throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
  };
  