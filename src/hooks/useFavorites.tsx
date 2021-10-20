import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

interface Favorite {
  id: string;
  title: string;
  original_title: string;
  original_title_romanised: string;
  description: string;
  director: string;
  producer: string;
  release_date: string | number;
  running_time: string | number;
  rt_score: string | number;
  people: string[];
  species: string[];
  locations: string[];
  vehicles: string[];
  url: string;
};

interface FavoritesProviderProps {
  children: ReactNode;
};

interface FavoritesContextData {
  favorites: Favorite[];
  createFavorites: (favorites: Favorite) => Promise<void>;
};

export const FavoritesContext = createContext<FavoritesContextData>({} as FavoritesContextData);

export function FavoritesProvider({ children }: FavoritesProviderProps) {
  const [favorites, setFavorites] = useState<Favorite[]>([]);

  useEffect(() => {
    const newFavorites = localStorage.getItem('favorites');

    setFavorites(JSON.parse(newFavorites));
  }, []);

  async function createFavorites(favorite: Favorite) {
    const newFavorites = [
      ...favorites,
      favorite
    ];

    setFavorites(newFavorites);

    localStorage.setItem('favorites', JSON.stringify(newFavorites));
  }

  return (
    <FavoritesContext.Provider value={{ favorites, createFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);

  return context;
}