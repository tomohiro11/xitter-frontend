'use client';

import Button from '@/ui/button';
import { useState } from 'react';

export default function CreateAccount() {
  const [errors, setErrors] = useState<{
    username?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
  }>({});

  const validateForm = (formData: FormData) => {
    const newErrors: typeof errors = {};
    const username = formData.get('username') as string;
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const confirmPassword = formData.get('confirmPassword') as string;

    if (username.length < 3) {
      newErrors.username = 'Username must be at least 3 characters';
    } else if (username.length > 20) {
      newErrors.username = 'Username must be less than 20 characters';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    } else if (!/[A-Z]/.test(password)) {
      newErrors.password = 'Password must contain at least one uppercase letter';
    } else if (!/[a-z]/.test(password)) {
      newErrors.password = 'Password must contain at least one lowercase letter';
    } else if (!/[0-9]/.test(password)) {
      newErrors.password = 'Password must contain at least one number';
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    if (validateForm(formData)) {
      console.log('Form is valid, submitting...');
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="w-96 font-mono text-sm">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Create Account
        </h1>
        
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2">
            <label htmlFor="username" className="text-sm font-medium text-[rgb(237,237,237)]">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
              required
            />
            {errors.username && (
              <span className="text-red-500 text-xs">{errors.username}</span>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-medium text-[rgb(237,237,237)]">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
              required
            />
            {errors.email && (
              <span className="text-red-500 text-xs">{errors.email}</span>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="text-sm font-medium text-[rgb(237,237,237)]">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
              required
            />
            {errors.password && (
              <span className="text-red-500 text-xs">{errors.password}</span>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="confirmPassword" className="text-sm font-medium text-[rgb(237,237,237)]">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className="rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
              required
            />
            {errors.confirmPassword && (
              <span className="text-red-500 text-xs">{errors.confirmPassword}</span>
            )}
          </div>

          <div className="mt-8 border-2 border-gray-300 rounded-full p-2">
            <Button type="submit" className="w-full text-[rgb(237,237,237)] hover:text-[rgb(255,255,255)] h-10 rounded-full font-medium">
              Create Account
            </Button>
          </div>
        </form>
      </div>
    </main>
  );
}
