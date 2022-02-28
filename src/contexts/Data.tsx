// Libs
import React, { useContext, createContext, ReactNode, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Contexts
import { brData } from '../data/brData';
import { enData } from '../data/enData';

// Types
import { DataType } from '../types/dataType';

type ContextValue = {
  data: DataType;
  lang: string;
  setLang: (value: string) => void;
};

const DataContext = createContext<ContextValue | undefined>(undefined);

type DataProviderProps = {
  children: ReactNode;
};

export function DataProvider(props: DataProviderProps) {
  const { children } = props;
  const [lang, setLang] = useState<string>('en');
  const [data, setData] = useState(enData);
  const { titles } = data.pages;
  const pathname = useLocation().pathname;

  // Update language
  useEffect(() => {
    const localLang = localStorage.getItem('lang');
    if (!localLang) localStorage.setItem('lang', lang);
    else setLang(localLang);
  }, []);

  // Update data
  useEffect(() => {
    lang === 'br' && setData(brData);
    lang === 'en' && setData(enData);
  }, [lang]);

  // Update page title
  useEffect(() => {
    switch (pathname) {
      case '/':
        document.title = 'Cloneflix';
        break;
      case '/signup':
        document.title = `${titles.signup} - Cloneflix`;
        break;
      case '/login':
        document.title = `${titles.login} - Cloneflix`;
        break;
      case '/browse':
        document.title = `${titles.browse} - Cloneflix`;
        break;
      case '/your-account':
        document.title = `${titles.yourAccount} - Cloneflix`;
        break;
      default:
        document.title = `${titles.pageNotFound} - Cloneflix`;
        break;
    }
  }, [pathname, data]);

  const value = { data, lang, setLang };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}

export function useData() {
  const context = useContext(DataContext);

  if (typeof context === 'undefined') {
    throw new Error('useData must be used within DataContext');
  }

  return context;
}
