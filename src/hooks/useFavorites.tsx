import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { Film } from '../types/film';

import { toast } from 'react-toastify';
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
      toast.error('Não foi possível carregar os favoritos!');
    }
  }, []);

  async function createFavorite(favorite: Film) {
    try {
      const foundFavorite = favorites.find((currentFavorite) => currentFavorite.id === favorite.id);

      if (foundFavorite) {
        toast.error(`"${favorite.title}" já está salvo nos favoritos`);
      }

      const newFavorites = [...favorites, favorite];

      setFavorites([...newFavorites]);

      localStorage.setItem('favorites', JSON.stringify(newFavorites));

      toast.success(`"${favorite.title}" foi adicionado aos favoritos!`);
    } catch {
      toast.error(`Houve um erro ao adicionar "${favorite.title}" aos favoritos.`);
    }
  }

  async function destroyFavorite(favorite: Film) {
    try {
      const newFavorites = favorites;
      const index = newFavorites.findIndex((currentFavorite) => currentFavorite.id === favorite.id);

      if (index < 0) {
        toast.error('Este item não pode ser retirado dos favoritos');
      }

      newFavorites.splice(index, 1);

      setFavorites([...newFavorites]);

      localStorage.setItem('favorites', JSON.stringify(newFavorites));
      toast.success(`"${favorite.title}" foi removido dos favoritos!`);
    } catch {
      toast.error(`Houve um erro ao remover "${favorite.title}" dos favoritos.`);
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
