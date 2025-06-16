import { useState, useCallback } from 'react';
import api from '@/lib/api';
import { AxiosError } from 'axios';

interface ApiResponse<T> {
  data: T | null;
  error: string | null;
  loading: boolean;
}

interface UseApiOptions {
  onSuccess?: (data: any) => void;
  onError?: (error: string) => void;
}

export function useApi<T = any>(options: UseApiOptions = {}) {
  const [state, setState] = useState<ApiResponse<T>>({
    data: null,
    error: null,
    loading: false,
  });

  const execute = useCallback(
    async (method: 'get' | 'post' | 'put' | 'delete', url: string, data?: any) => {
      setState({ data: null, error: null, loading: true });

      try {
        const response = await api[method](url, data);
        setState({ data: response.data, error: null, loading: false });
        options.onSuccess?.(response.data);
        return response.data;
      } catch (error) {
        const errorMessage = error instanceof AxiosError 
          ? error.response?.data?.message || error.message 
          : 'An error occurred';
        
        setState({ data: null, error: errorMessage, loading: false });
        options.onError?.(errorMessage);
        throw error;
      }
    },
    [options]
  );

  return {
    ...state,
    get: (url: string) => execute('get', url),
    post: (url: string, data?: any) => execute('post', url, data),
    put: (url: string, data?: any) => execute('put', url, data),
    delete: (url: string) => execute('delete', url),
  };
} 