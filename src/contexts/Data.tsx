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
  setLang: (value: string) => void;
};

const DataContext = createContext<ContextValue | undefined>(undefined);

type DataProviderProps = {
  children: ReactNode;
};

export function DataProvider(props: DataProviderProps) {
  const { children } = props;
  const [lang, setLang] = useState('en');
  const [data, setData] = useState(lang === 'br' ? brData : enData);

  const value = { data, setLang };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}

export function useData() {
  const context = useContext(DataContext);

  if (typeof context === 'undefined') {
    throw new Error('useData must be used within DataContext');
  }

  return context;
}
