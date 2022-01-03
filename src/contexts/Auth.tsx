import React, { useContext, createContext, useState, ReactNode } from 'react';
// import { auth } from '../libs/firebase';
// import firebase from 'firebase';

type ContextValue = {
  isDeleting: boolean;
  setIsDeleting: (value: boolean) => void;
  isUpdating: boolean;
  setIsUpdating: (value: boolean) => void;

  email: string;
  setEmail: (value: string) => void;
  emailError: string;
  setEmailError: (value: string) => void;

  password: string;
  setPassword: (value: string) => void;
  passwordError: string;
  setPasswordError: (value: string) => void;
};

const AuthContext = createContext<ContextValue | undefined>(undefined);

type AuthProviderProps = {
  children: ReactNode;
};

export function AuthProvider({ children }: AuthProviderProps) {
  const [isDeleting, setIsDeleting] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const value = {
    isDeleting,
    setIsDeleting,
    isUpdating,
    setIsUpdating,

    email,
    setEmail,
    emailError,
    setEmailError,

    password,
    setPassword,
    passwordError,
    setPasswordError,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (typeof context === 'undefined') {
    throw new Error('useAuth must be used within AuthContext');
  }

  return context;
}
