import React, { createContext, useCallback, useState, useContext } from 'react';
import { IBookProps } from '../utils/interfaces';

interface ContextData {
    books: Array<IBookProps>;
    handleFavorite(book: IBooks): void;
    handleRecent(book: IBooks): void;
    setBooks(books: []): void;
}

interface IBooks {
    id: string;
    title: string;
}

const Context = createContext<ContextData>({} as ContextData);

export const Provider: React.FC = ({ children }) => {

    const [data, setData] = useState([]);


    const handleFavorite = useCallback((book: IBooks) => {
        const existsFavorites = localStorage.getItem('@SouthSystemBooks:favorites');
        const { id } = book;
        if (existsFavorites) {
            const favorites = JSON.parse(existsFavorites);
            const existsFavorite = favorites.find((favorite: IBooks) => favorite.id === id);
            if (!existsFavorite) {
                favorites.push(book);
                localStorage.setItem('@SouthSystemBooks:favorites', JSON.stringify(favorites));
                return favorites;
            } else {
                const favoriteIndex = favorites.findIndex((favorite: IBooks) => favorite.id === id);
                favorites.splice(favoriteIndex, 1);
                localStorage.setItem('@SouthSystemBooks:favorites', JSON.stringify(favorites));
                return favorites;
            }
        }
        localStorage.setItem('@SouthSystemBooks:favorites', JSON.stringify([book]));
    }, []);

    const handleRecent = useCallback((book) => {
        const existsRecents = localStorage.getItem('@SouthSystemBooks:recents');
        const { id } = book;
        if (existsRecents) {
            const recents: IBooks[] = JSON.parse(existsRecents);
            const existsRecent = recents.find(favorite => favorite.id === id);
            if (!existsRecent) {
                recents.push(book);
                localStorage.setItem('@SouthSystemBooks:favorites', JSON.stringify(recents));
                return recents;
            }
        }
        localStorage.setItem('@SouthSystemBooks:recents', JSON.stringify([book]));

    }, []);

    const setBooks = useCallback((books) => {
        setData(books)
    }, []);


    return (
        <Context.Provider value={{ books: data, handleFavorite, handleRecent, setBooks }}>
            {children}
        </Context.Provider>
    );
};

export function useProvider(): ContextData {
    const context = useContext(Context);

    return context;

}
