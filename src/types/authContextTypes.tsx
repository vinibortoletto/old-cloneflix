import { User, UserCredential } from 'firebase/auth';

export type ContextValue = {
  isDeleting: boolean;
  setIsDeleting: (value: boolean) => void;
  isUpdating: boolean;
  setIsUpdating: (value: boolean) => void;
  isError: boolean;
  setIsError: (value: boolean) => void;
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;

  user: User | null | undefined;
  setUser: (value: User | null | undefined) => void;
  email: string;
  setEmail: (value: string) => void;
  emailError: string;
  setEmailError: (value: string) => void;

  password: string;
  setPassword: (value: string) => void;
  passwordError: string;
  setPasswordError: (value: string) => void;
  authErrorMessage: string;
  setAuthErrorMessage: (value: string) => void;

  validateEmail: (inputText: string) => void;
  validatePassword: (inputText: string) => void;
  checkAuthErrors: (errorCode: string) => void;
  cleanInputFields: (type: string) => void;
};
