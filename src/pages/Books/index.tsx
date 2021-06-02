import { BottomNavigationAction } from '@material-ui/core';
import { Form } from '@unform/web';
import React, { useCallback, useRef, useState } from 'react';
import { FiBookOpen } from 'react-icons/fi';
import { MdFavorite, MdRestore } from 'react-icons/md';
import { Link, useHistory } from 'react-router-dom';

import logo from '../../assets/logo-south-system.svg';
import Card from '../../components/Cards';
import Input from '../../components/Input';
import Loading from '../../components/Loading';
import { useProvider } from '../../hooks/provider';
import api from '../../services/api';

import { Container, Header, Content, Links } from './styles';

const Books: React.FC = () => {

    const [loading, setLoading] = useState(false);
    const { books, setBooks } = useProvider();
    const formRef = useRef(null);
    const history = useHistory();
    const [navigate, setNavigate] = useState();

    const handleSubmit = useCallback(async ({ book }) => {
        setLoading(true);
        const googleBooks = await api.get(`/volumes?q=${book || 'React Js'}&maxResults=40&filter=ebooks`);
        setBooks(googleBooks.data.items);
        setLoading(false);
        console.log(googleBooks.data.items);
    }, [setBooks]);


    return (
        <Container>
           {loading && <Loading isLoading={loading} />}
            <Header>
                <Link to="/">
                    <img src={logo} alt="logo" />
                </Link>
                <Form ref={formRef} onSubmit={handleSubmit}>
                    <Input name="book" icon={FiBookOpen} placeholder="Pesquise pelos melhoes livros" />
                </Form>
                <Links
                    value={navigate}
                    onChange={(event, newValue) => {
                        setNavigate(newValue);
                    }}
                    showLabels
                >
                    <BottomNavigationAction onClick={() => { history.push('/favorites') }} label="Favorites" icon={<MdFavorite />} />
                    <BottomNavigationAction onClick={() => { history.push('/recents') }} label="Recents" icon={<MdRestore />} />
                </Links>
            </Header>
            <Content>
                <h2>Livros</h2>
                <ul>
                    {books && books.map((book) => <li key={book.id}><Card book={book} /></li>)}
                </ul>
            </Content>
        </Container>
    );
}
export default Books;
