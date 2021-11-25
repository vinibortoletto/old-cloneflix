import React, {
  useContext,
  createContext,
  ReactNode,
  useState,
  useEffect,
} from 'react';
import { brData } from '../data/brData';
import { enData } from '../data/enData';
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

  useEffect(() => {
    const localLang = localStorage.getItem('lang');
    if (!localLang) localStorage.setItem('lang', lang);
    else setLang(localLang);
  }, []);

  useEffect(() => {
    lang === 'br' && setData(brData);
    lang === 'en' && setData(enData);
  }, [lang]);

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
