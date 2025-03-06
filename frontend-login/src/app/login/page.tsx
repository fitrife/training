
'use client';
import { useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';

interface FormData {
  username: string;
  password: string;
}

export default function Login() {
  const { register, handleSubmit } = useForm<FormData>();
  const [error, setError] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);

  const onSubmit = async (data: FormData) => {
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/login`, data);
      setToken(response.data.token);
      setError(null);
    } catch (err) {
      setError('Login failed. Please check your credentials.');
      setToken(null);
    }
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
      <div className='bg-white p-8 rounded-lg shadow-lg w-96'>
        <h2 className='text-2xl font-bold text-center text-gray-700 mb-6'>Login</h2>
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
          <input {...register('username')} placeholder='Username' required className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' />
          <input type='password' {...register('password')} placeholder='Password' required className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' />
          <button type='submit' className='w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition'>Login</button>
        </form>
        {error && <p className='text-red-500 text-center mt-4'>{error}</p>}
        {token && <p className='text-green-500 text-center mt-4'>Token: {token}</p>}
      </div>
    </div>
  );
}

