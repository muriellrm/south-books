import React, { useCallback, useState } from 'react';
import { DialogContentText, DialogProps, IconButton } from '@material-ui/core';
import { BiBookOpen } from 'react-icons/bi';
import { MdClose, MdFavorite, MdFavoriteBorder } from 'react-icons/md';

import { IBookProps } from '../../utils/interfaces';

import { useProvider } from '../../hooks/provider';

import Button from '../Button';

import { Container, Content, Title, ButtonGroup } from './styles';

interface BookProps extends DialogProps {
    book: IBookProps;
}

const CardDetails: React.FC<BookProps> = ({ book, open, onClose, onBackdropClick }) => {
    const { handleFavorite } = useProvider();
    const [isFavorite, setIsFavorite] = useState(() => {
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

    const handleFavoriteButton = useCallback(() => {
        handleFavorite(book);
        setIsFavorite(!isFavorite);
    }, [handleFavorite, isFavorite, book]);

    return (
        <Container
            open={open}
            keepMounted
            onClose={onClose}
            fullWidth={true}
            maxWidth='lg'
        >
            <Title id="alert-dialog-slide-title">
                <p>{book.volumeInfo.title}</p>
                <IconButton edge="start" color="inherit" aria-label="close" onClick={onBackdropClick}>
                    <MdClose />
                </IconButton>
            </Title>
            <Content>
                <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
                <DialogContentText id="alert-dialog-slide-description">
                    <p>{book.volumeInfo.description}</p>
                    <h5>
                        <p>Autores: {book.volumeInfo.authors} </p>
                        <p>Data de Publicação:{book.volumeInfo.publishedDate} </p>
                    </h5>
                    <ButtonGroup>
                        <Button icon={isFavorite ? MdFavorite : MdFavoriteBorder} onClick={handleFavoriteButton} />
                        <a href={book.volumeInfo.infoLink}><Button icon={BiBookOpen}/></a>
                    </ButtonGroup>

                </DialogContentText>
            </Content>
        </Container >
    );
};

export default CardDetails;