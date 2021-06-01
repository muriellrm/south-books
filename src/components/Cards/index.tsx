import React, { useCallback, useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import { useProvider } from '../../hooks/provider';

import { BookProps } from '../../utils/interfaces';
import Button from '../Button';
import CardDetails from '../CardDetails';

import { Container, BookContent } from './styles';

interface IBooks {
    id: string;
    title: string;
}

const Card: React.FC<BookProps> = ({ book }) => {
    const [icon, setIcon] = useState(() => {
        const existentFavorites = localStorage.getItem('@SouthSystemBooks:favorites');
        if (existentFavorites) {
            const favorites = JSON.parse(existentFavorites);
            const existsFavorite = favorites.find((favorite: IBooks) => favorite.id === book.id);
            if (existsFavorite) {
                return true;
            }
        }
        return false;
    });

    const { handleFavorite } = useProvider()
    const { id, volumeInfo } = book;
    const { title, authors, publishedDate, imageLinks } = volumeInfo;
    const [details, setDetails] = useState(false);

    const handleFavoriteButton = useCallback(() => {
        const favoriteBook = { id, title };
        handleFavorite(favoriteBook);
        setIcon(!icon);
    }, [handleFavorite, icon, id, title]);

    const handleDetails = useCallback(() => {
        setDetails(!details);
    }, [details]);

    return (
        <Container >
            <img src={imageLinks.thumbnail} alt="" />
            <BookContent>
                <h3>{title}</h3>
                <p>{authors} {publishedDate && ' - '.concat(publishedDate)}</p>
            </BookContent>
            <ul>
                <li><Button icon={icon ? MdFavorite : MdFavoriteBorder} onClick={handleFavoriteButton} /></li>
                <li><Button icon={FiPlus} onClick={handleDetails} /></li>
            </ul>
            <CardDetails book={book} details={details}  />
        </Container>
    );
}

export default Card;