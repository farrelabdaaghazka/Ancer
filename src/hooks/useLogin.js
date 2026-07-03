import { useState } from 'react';
import { apiClient } from '../lib/apiClient';

export const useLogin = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = async (credentials) => {
    try {
      setLoading(true);
      setError(null);
      setUser(null);
      
      const response = await apiClient.post('/login', credentials);
      
      if (response?.user) {
        setUser(response.user);
        return response.user; 
      }
    } catch (err) {
      console.error("[ANCER Login Error]", err);
      setError(err);
      throw err; 
    } finally {
      setLoading(false);
    }
  };

  return { user, loading, error, login };
};