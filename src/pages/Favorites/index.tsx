import React, { useEffect, useState } from 'react';

import Header from '../../components/Header';
import Card from '../../components/Cards';

import { IBookProps } from '../../utils/interfaces';

import { Container, Content } from './styles';


const Favorites: React.FC = () => {
    const [favorites, setFavorites] = useState([] as IBookProps[]);    
    
    useEffect(() => {
        const existsFavorite = localStorage.getItem('@SouthSystemBooks:favorites');
        if (existsFavorite) {
            setFavorites(JSON.parse(existsFavorite));
        }
    }, []);

    return (
        <Container>
            <Header BottomNavigation={0} />
            <Content>
                {
                    favorites.length > 0 ?
                        <h2>Livros Favoritos</h2>
                        :
                        <h1>Nenhum livro está salvo nos favoritos</h1>
                }
                <ul>
                    {favorites && favorites.map((book) => <li key={book.id}><Card book={book} /></li>)}
                </ul>
            </Content>
        </Container>
    );
}

export default Favorites;