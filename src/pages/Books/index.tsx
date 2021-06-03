import { BottomNavigationAction } from '@material-ui/core';
import { Form } from '@unform/web';
import React, { ChangeEvent, useCallback, useRef, useState } from 'react';
import { FiBookOpen } from 'react-icons/fi';
import { MdFavorite, MdRestore } from 'react-icons/md';
import { Link, useHistory } from 'react-router-dom';


import logo from '../../assets/logo-south-system.svg';
import Card from '../../components/Cards';
import Input from '../../components/Input';
import Loading from '../../components/Loading';
import { useProvider } from '../../hooks/provider';
import api from '../../services/api';

import { Container, Header, Content, Links, Paginations } from './styles';

const Books: React.FC = () => {

    const [loading, setLoading] = useState(false);
    const { books, setBooks } = useProvider();
    const formRef = useRef(null);
    const history = useHistory();
    const [navigate, setNavigate] = useState();
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState('');

    const handleSubmit = useCallback(async ({ book }) => {        
        setSearch(book);
        setLoading(true);
        const googleBooks = await api.get(`/volumes?q=${book || 'React Js'}&maxResults=12&filter=ebooks`);
        setBooks(googleBooks.data.items);
        setLoading(false);
    }, [setBooks]);

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

        const googleBooks = await api.get(`/volumes?q=${search || 'React Js'}&maxResults=12&startIndex=${pagination}&filter=ebooks`);
        setBooks(googleBooks.data.items);
        setLoading(false);
    };

    return (
        <Container>
            {loading && <Loading isLoading={loading} />}
            <Header>
                <Link to="/">
                    <img src={logo} alt="logo" />
                </Link>
                <Form ref={formRef} onSubmit={handleSubmit}>
                    <Input data-testid="book" name="book" icon={FiBookOpen} placeholder="Pesquise pelos melhoes livros" />
                </Form>
                <Links
                    value={navigate}
                    onChange={(event, newValue) => {
                        setNavigate(newValue);
                    }}
                    showLabels
                >
                    <BottomNavigationAction data-testid='favorites' onClick={() => { history.push('/favorites') }} label="Favorites" icon={<MdFavorite />} />
                    <BottomNavigationAction data-testid='recents' onClick={() => { history.push('/recents') }} label="Recents" icon={<MdRestore />} />
                </Links>
            </Header>
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
