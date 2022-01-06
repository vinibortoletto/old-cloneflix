import React, { useContext, createContext, useState, ReactNode, useEffect } from 'react';
import { User } from 'firebase/auth';
import { auth } from '../libs/firebase';
import { useLocation } from 'react-router-dom';

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

  const [user, setUser] = useState<User | null | undefined>();
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [authErrorMessage, setAuthErrorMessage] = useState('');

  function validateEmail(inputText: string) {
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const inputField = document.getElementById('email') as HTMLInputElement;

    if (pathname === '/your-account') {
      // Updating account
      if (!emailRegex.test(inputText)) {
        setIsError(true);
        return setEmailError(input.email.error.invalid);
      }

      setEmailError('');
      setIsError(false);
      inputField.classList.remove('error');
    } else {
      // Login and Signup
      if (inputText === '') {
        setIsError(true);
        return setEmailError(input.email.error.empty);
      }

      if (!emailRegex.test(inputText)) {
        setIsError(true);
        return setEmailError(input.email.error.invalid);
      }

      setEmailError('');
      setIsError(false);
      inputField.classList.remove('error');
    }
  }

  function validatePassword(inputText: string) {
    const inputField = document.getElementById('password') as HTMLInputElement;

    if (pathname === '/your-account') {
      // Updating account
      if (inputText !== '' && inputText.length < 6) {
        setIsError(true);
        return setPasswordError(input.password.error.invalid);
      }

      setPasswordError('');
      setIsError(false);
      inputField.classList.remove('error');
    } else {
      // Login and Signup
      if (inputText === '') {
        setIsError(true);
        return setPasswordError(input.password.error.empty);
      }
      if (inputText.length < 6) {
        setIsError(true);
        return setPasswordError(input.password.error.invalid);
      }
      setPasswordError('');
      setIsError(false);
      inputField.classList.remove('error');
    }
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

    // if (errorCode.includes('invalid-email')) {
    //   setEmailError(data.authErrors.emailAlreadyInUse);
    // }

    // if (errorCode.includes('email-already-in-use')) {
    //   setEmailError(data.authErrors.emailAlreadyInUse);
    // }

    // if (errorCode.includes('user-not-found')) {
    //   setEmailError(data.authErrors.userNotFound);
    // }

    // if (errorCode.includes('wrong-password')) {
    //   setPasswordError(data.authErrors.wrongPassword);
    // }

    // if (errorCode.includes('too-many-requests')) {
    //   setAuthErrorMessage(data.authErrors.tooManyRequests);
    // }

    // if (errorCode.includes('requires-recent-login')) {
    //   setAuthErrorMessage(data.authErrors.requiresRecentLogin);
    // }
  }

  // Keeps user logged in
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return unsubscribe;
  }, []);

  // useEffect(() => {
  //   setEmail('');
  //   setPassword('');
  // }, []);

  const value = {
    isDeleting,
    setIsDeleting,
    isUpdating,
    setIsUpdating,
    isError,
    setIsError,
    isLoading,
    setIsLoading,

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
