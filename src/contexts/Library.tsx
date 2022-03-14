// Libs
import React, {
  useContext,
  createContext,
  useState,
  ReactNode,
  useEffect,
} from 'react';

// Types
import { ContextValue, RowProps } from '../types/libraryContextTypes';

// Contexts
import { useData } from './Data';

const LibraryContext = createContext<ContextValue | undefined>(undefined);

const API_KEY = '4cd4fecb78a01444edbe1c1aa9635558';
const API_BASE = 'https://api.themoviedb.org/3';

type LibraryProviderProps = {
  children: ReactNode;
};

export function LibraryProvider({ children }: LibraryProviderProps) {
  const { lang } = useData();
  const libraryLanguage = lang === 'br' ? 'language=pt-BR' : 'language=en-US';
  const [libraryRows, setLibraryRows] = useState<RowProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [spotlight, setSpotlight] = useState<any>();

  async function basicFetch(endpoint: string) {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
  }

  async function getLibraryRows() {
    return [
      {
        slug: 'originals',
        title: lang === 'en' ? 'netflix originals' : 'originais netflix',
        item: await basicFetch(
          `/discover/tv?with_networks=213&api_key=${API_KEY}&${libraryLanguage}&${libraryLanguage}`,
        ),
      },

      {
        slug: 'trending',
        title: lang === 'en' ? 'trending' : 'em alta',
        item: await basicFetch(
          `/trending/all/week?&api_key=${API_KEY}&${libraryLanguage}`,
        ),
      },

      {
        slug: 'toprated',
        title: lang === 'en' ? 'top rated' : 'populares',
        item: await basicFetch(
          `/movie/top_rated?&api_key=${API_KEY}&${libraryLanguage}`,
        ),
      },

      {
        slug: 'action',
        title: lang === 'en' ? 'action' : 'ação',
        item: await basicFetch(
          `/discover/movie?with_genres=28&api_key=${API_KEY}&${libraryLanguage}`,
        ),
      },

      {
        slug: 'comedy',
        title: lang === 'en' ? 'comedy' : 'comédia',
        item: await basicFetch(
          `/discover/movie?with_genres=35&api_key=${API_KEY}&${libraryLanguage}`,
        ),
      },

      {
        slug: 'horror',
        title: lang === 'en' ? 'horror' : 'terror',
        item: await basicFetch(
          `/discover/movie?with_genres=27&api_key=${API_KEY}&${libraryLanguage}`,
        ),
      },

      {
        slug: 'romance',
        title: lang === 'en' ? 'romance' : 'romântico',
        item: await basicFetch(
          `/discover/movie?with_genres=10749&api_key=${API_KEY}&${libraryLanguage}`,
        ),
      },

      {
        slug: 'documentary',
        title: lang === 'en' ? 'documentary' : 'documentário',
        item: await basicFetch(
          `/discover/movie?with_genres=99&api_key=${API_KEY}&${libraryLanguage}`,
        ),
      },
    ];
  }

  async function getDetailedData(id: number) {
    const newSpotlight = await basicFetch(
      `/tv/${id}?&api_key=${API_KEY}&${libraryLanguage}`,
    );
    setSpotlight(newSpotlight);
  }

  function getSpotlightMovie(rows: RowProps[]) {
    const randomNumber = Math.floor(Math.random() * 19);
    const randomSpotlight = rows[0].item.results[randomNumber];
    getDetailedData(randomSpotlight.id);
  }

  // Fetch content on app mount
  useEffect(() => {
    async function fetchContent() {
      const newLibraryRows = await getLibraryRows();
      setLibraryRows(newLibraryRows);
      await getSpotlightMovie(newLibraryRows);
    }
    setIsLoading(true);
    fetchContent();
    setTimeout(() => setIsLoading(false), 2000);
  }, [lang]);

  const value = { libraryRows, isLoading, setIsLoading, spotlight };

  return (
    <LibraryContext.Provider value={value}>{children}</LibraryContext.Provider>
  );
}

export function useLibrary() {
  const context = useContext(LibraryContext);

  if (typeof context === 'undefined') {
    throw new Error('useLibrary must be used within LibraryContext');
  }

  return context;
}
