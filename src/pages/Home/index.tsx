import { Form } from '@unform/web';
import React, { useCallback, useRef, useState } from 'react';

import api from '../../services/api';

import Header from '../../components/Header';
import Input from '../../components/Input';
import { FiBookOpen } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import { Container, Content } from './styles';
import { useProvider } from '../../hooks/provider';
import Loading from '../../components/Loading';

const HomePage: React.FC = () => {

    const [loading, setLoading] = useState(false);
    const { setBooks } = useProvider();
    const formRef = useRef(null);
    const history = useHistory();


    const handleSubmit = useCallback(async ({ book }) => {
        setLoading(true);
        const books = await api.get(`/volumes?q=${book || 'React Js'}&maxResults=40&filter=ebooks`);
        setBooks(books.data.items);
        setLoading(false);
        history.push('/books');
    }, [history, setBooks]);

    return (
        <Container>
            <Loading isLoading={loading} />
            <Header />
            <Content>
                <Form ref={formRef} onSubmit={handleSubmit}>
                    <h1>Descubra um mundo de novas ideias, e explore o seu conhecimento através da leitura.</h1>
                    <Input name="book" icon={FiBookOpen} placeholder="Pesquise pelos melhoes livros" />
                </Form>
            </Content>
        </Container>
    );
};

export default HomePage;