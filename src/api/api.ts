import axios from 'axios';
import { LoginRequest, UserData } from "../types/auth";
import { LoginResponse } from "../types/auth";

const BASE_URL= "http://localhost:8500/api/v1"


export const login = async (data: LoginRequest): Promise<LoginResponse> => {
  try {
    const response = await axios.post<LoginResponse>(`${BASE_URL}/auth/login`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data; 
  } catch (error) {
    console.error('Login failed:', error);
    throw new Error('Login failed');
  }
};

export const getUserById = async (id: string): Promise<UserData> => {
  const token = localStorage.getItem('token')

  try {
    const response = await axios.get<UserData>(`${BASE_URL}/user/${id}`,{
      headers: {
        "Authorization": `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
  
    return response.data; 
  
  } catch (error) {
    console.error('User fetch fail: ', error);
    throw new Error('User fetch fail');
  }
};
