// Libs
import React, { useContext, createContext, useState, ReactNode, useEffect } from 'react';
import { User } from 'firebase/auth';
import { auth } from '../libs/firebase';
import { useLocation } from 'react-router-dom';

// Helpers
import { emailRegex } from '../helpers/regex/emailRegex';

// Types
import { ContextValue } from '../types/authContextTypes';

// Contexts
import { useData } from './Data';

const AuthContext = createContext<ContextValue | undefined>(undefined);

type AuthProviderProps = {
  children: ReactNode;
};

export function AuthProvider({ children }: AuthProviderProps) {
  const pathname = useLocation().pathname;
  const { input } = useData().data.components;
  const { data } = useData();

  const [isDeleting, setIsDeleting] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(true);

  const [user, setUser] = useState<User | null | undefined>();
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [authErrorMessage, setAuthErrorMessage] = useState('');

  function cleanInputFields(type: string) {
    const emailField = document.getElementById('email') as HTMLInputElement;
    const passwordField = document.getElementById('password') as HTMLInputElement;

    if (type === 'email') {
      setEmailError('');
      setIsError(false);
      emailField.classList.remove('error');
    }

    if (type === 'password') {
      setPasswordError('');
      setIsError(false);
      passwordField.classList.remove('error');
    }
  }

  function validateEmail(inputText: string) {
    if (pathname === '/your-account') {
      if (!inputText && password) return cleanInputFields('email');

      if (!emailRegex.test(inputText)) {
        setIsError(true);
        return setEmailError(input.email.error.invalid);
      }
    }

    if (inputText === '') {
      setIsError(true);
      return setEmailError(input.email.error.empty);
    }

    if (!emailRegex.test(inputText)) {
      setIsError(true);
      return setEmailError(input.email.error.invalid);
    }

    cleanInputFields('email');
  }

  function validatePassword(inputText: string) {
    if (pathname === '/your-account' && !inputText && email) {
      return cleanInputFields('password');
    }

    if (inputText === '') {
      setIsError(true);
      return setPasswordError(input.password.error.empty);
    }

    if (inputText.length < 6) {
      setIsError(true);
      return setPasswordError(input.password.error.invalid);
    }

    cleanInputFields('password');
  }

  function checkAuthErrors(errorCode: string) {
    switch (errorCode) {
      case 'auth/invalid-email':
        setEmailError(data.authErrors.emailAlreadyInUse);
        break;
      case 'auth/email-already-in-use':
        setEmailError(data.authErrors.emailAlreadyInUse);
        break;
      case 'auth/user-not-found':
        setEmailError(data.authErrors.userNotFound);
        break;
      case 'auth/wrong-password':
        setPasswordError(data.authErrors.wrongPassword);
        break;
      case 'auth/too-many-requests':
        setAuthErrorMessage(data.authErrors.tooManyRequests);
        break;
      case 'auth/requires-recent-login':
        setAuthErrorMessage(data.authErrors.requiresRecentLogin);
        break;
      default:
        break;
    }
  }

  // Keeps user logged in
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      setIsAuthenticating(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    isDeleting,
    setIsDeleting,
    isUpdating,
    setIsUpdating,
    isError,
    setIsError,
    isLoading,
    setIsLoading,
    isAuthenticating,
    setIsAuthenticating,

    user,
    setUser,
    email,
    setEmail,
    emailError,
    setEmailError,

    password,
    setPassword,
    passwordError,
    setPasswordError,
    authErrorMessage,
    setAuthErrorMessage,

    validateEmail,
    validatePassword,
    checkAuthErrors,
    cleanInputFields,
  };

  return <AuthContext.Provider value={value}>{!isAuthenticating && children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (typeof context === 'undefined') {
    throw new Error('useAuth must be used within AuthContext');
  }

  return context;
}
