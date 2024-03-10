import axios, { AxiosError } from 'axios';
import { useState } from 'react';
import axiosInstance from '../api/axiosInstance';

interface RegisterBikeCredentials {
  title: string;
  description: string;
  price: number;
  category: string;
  condition: string;
  imageUrl: string;
}

export const useRegisterBike = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [isRegisteredBike, setIsRegisteredBike] = useState<boolean>(false);

  const registerBike = async (
    credentials: RegisterBikeCredentials,
  ): Promise<void> => {
    setLoading(true);
    setError(null);
    setIsRegisteredBike(false);

    try {
      await axiosInstance.post('/products/', credentials);
      setIsRegisteredBike(true);
    } catch (error: unknown) {
      setIsRegisteredBike(false);
      if (axios.isAxiosError(error)) {
        const err = error as AxiosError<{ message: string }>;
        if (err.response) {
          if (typeof err.response.data === 'string') {
            setError(err.response.data);
          } else if (err.response.data && 'message' in err.response.data) {
            setError(
              err.response.data.message ||
                'Failed to register. Please try again.',
            );
          } else {
            setError('Failed to register. Please try again.');
          }
        } else if (err.request) {
          setError('No response received. Please try again.');
        } else {
          setError('An error occurred. Please try again.');
        }
      } else {
        setError('An unknown error occurred. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return { registerBike, loading, error, isRegisteredBike };
};
