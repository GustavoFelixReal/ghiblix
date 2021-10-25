import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { Film } from '../types/film';

interface FavoritesProviderProps {
  children: ReactNode;
}

interface FavoritesContextData {
  favorites: Film[];
  createFavorite: (favorite: Film) => Promise<void>;
  destroyFavorite: (favorite: Film) => Promise<void>;
}

export const FavoritesContext = createContext<FavoritesContextData>({} as FavoritesContextData);

export function FavoritesProvider({ children }: FavoritesProviderProps) {
  const [favorites, setFavorites] = useState<Film[]>([]);

  useEffect(() => {
    try {
      const newFavorites = localStorage.getItem('favorites');

      setFavorites(JSON.parse(newFavorites) || []);
    } catch {
      setFavorites([]);
      console.error('Não foi possível carregar os favoritos!');
    }
  }, []);

  async function createFavorite(favorite: Film) {
    try {
      const foundFavorite = favorites.find((currentFavorite) => currentFavorite.id === favorite.id);

      if (foundFavorite) {
        throw new Error('Item já está salvo nos favoritos');
      }

      const newFavorites = [...favorites, favorite];

      setFavorites([...newFavorites]);

      localStorage.setItem('favorites', JSON.stringify(newFavorites));
    } catch {
      console.error(`houve um erro ao adicionar "${favorite.title}" aos favoritos.`);
    }
  }

  async function destroyFavorite(favorite: Film) {
    try {
      const newFavorites = favorites;
      const index = newFavorites.findIndex((currentFavorite) => currentFavorite.id === favorite.id);

      if (index < 0) {
        throw new Error('Este item não pode ser retirado dos favoritos pois o mesmo não exite');
      }

      newFavorites.splice(index, 1);

      setFavorites([...newFavorites]);

      localStorage.setItem('favorites', JSON.stringify(newFavorites));
    } catch {
      console.error(`houve um erro ao remover "${favorite.title}" dos favoritos.`);
    }
  }

  return (
    <FavoritesContext.Provider value={{ favorites, createFavorite, destroyFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);

  return context;
}
