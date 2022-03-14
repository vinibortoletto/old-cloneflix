/* eslint-disable camelcase */
export type ContextValue = {
  libraryRows: {
    slug: string;
    title: string;
    item: any;
  }[];
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
  spotlight: any;
};

export type RowProps = {
  slug: string;
  title: string;
  item: any;
};

export type RowItemProps = {
  backdrop_path: string;
  first_air_date: string;
  genre_ids: number[];
  id: number;
  name: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
};
