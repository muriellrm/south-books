import React, { useCallback, useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import { useProvider } from '../../hooks/provider';
import formatDate from '../../utils/formatDate';

import { BookProps, IBookProps } from '../../utils/interfaces';
import Button from '../Button';
import CardDetails from '../CardDetails';

import { Container, BookContent } from './styles';

const Card: React.FC<BookProps> = ({ book }) => {
    const [icon, setIcon] = useState(() => {
        const existentFavorites = localStorage.getItem('@SouthSystemBooks:favorites');
        if (existentFavorites) {
            const favorites = JSON.parse(existentFavorites);
            const existsFavorite = favorites.find((favorite: IBookProps) => favorite.id === book.id);
            if (existsFavorite) {
                return true;
            }
        }
        return false;
    });

    const { handleFavorite, handleRecent } = useProvider()
    const { volumeInfo } = book;
    const { title, authors, publishedDate, imageLinks } = volumeInfo;
    const [details, setDetails] = useState(false);
    
    const handleFavoriteButton = useCallback(() => {
        handleFavorite(book);
        setIcon(!icon);
    }, [handleFavorite, icon, book]);

    const handleDetails = useCallback(() => {
        handleRecent(book);
        setDetails(!details);
    }, [handleRecent, details, book]);

    return (
        <Container >
            <img src={imageLinks.thumbnail} alt="" />
            <BookContent>
                <h3>{title.substr(0, 80)}</h3>
                <p>{authors && authors[0]} {!!publishedDate ? authors ? ' - '.concat(formatDate(publishedDate)) : formatDate(publishedDate) : ''}</p>
            </BookContent>
            <ul>
                <li><Button icon={icon ? MdFavorite : MdFavoriteBorder} onClick={handleFavoriteButton} data-testid='handleFavoriteButton'/></li>
                <li><Button icon={FiPlus} onClick={handleDetails} data-testid='handleDetails'/></li>
            </ul>
            {details && <CardDetails book={book} onClose={() => { setDetails(!details) }} onBackdropClick={() => { setDetails(!details) }} open={details} />}
        </Container>
    );
}

export default Card;