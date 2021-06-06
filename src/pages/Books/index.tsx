import React, { ChangeEvent, useEffect, useState } from 'react';
import { FiBookOpen } from 'react-icons/fi';

import Card from '../../components/Cards';
import Header from '../../components/Header';
import Loading from '../../components/Loading';

import { useProvider } from '../../hooks/provider';
import { IBookProps } from '../../utils/interfaces';

import api from '../../services/api';

import { Container, Content, Paginations } from './styles';

const Books: React.FC = () => {

    const [loading, setLoading] = useState(false);
    const { book } = useProvider();
    const [books, setBooks] = useState<IBookProps[]>([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        async function getBooks() {
            setLoading(true);
            const googleBooks = await api.get(`/volumes?q=${book || 'React Js'}&maxResults=12&filter=ebooks`);
            setBooks(googleBooks.data.items);
            setPage(1);
            window.scrollTo(0,0);
            setLoading(false);
        }
        getBooks();
    }, [book])

    const handlePagination = async (event: ChangeEvent<unknown>, value: number) => {
        setPage(value);
        setLoading(true);
        let pagination;
        switch (value) {
            case 1:
                pagination = value;
                break;
                case 2:
                    pagination = 13;
                    break;
                    default:
                        pagination = 12 * value;
                        break;
                    }
                    
                    const googleBooks = await api.get(`/volumes?q=${book || 'React Js'}&maxResults=12&startIndex=${pagination}&filter=ebooks`);
                    setBooks(googleBooks.data.items);
                    setLoading(false);
                    window.scrollTo(0,0);
                };
                
                return (
                    <Container>
            {loading && <Loading isLoading={loading} />}
            <Header icon={FiBookOpen} />
            <Content data-testid='book-content'>
                {books.length > 0 ? <h2>Livros</h2> : <h1>Nenhum livro foi pesquisado</h1>}
                <ul>
                    {books && books.map((book) => <li key={book.id}><Card book={book} /></li>)}
                    {books.length > 0 && <Paginations count={10} page={page} onChange={handlePagination} size='large' />}
                </ul>
            </Content>
        </Container>
    );
}
export default Books;
