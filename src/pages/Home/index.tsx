import React, { useCallback, useRef } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import Header from '../../components/Header';
import Input from '../../components/Input';

import { FiBookOpen } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import { Container, Content } from './styles';
import { useProvider } from '../../hooks/provider';

const HomePage: React.FC = () => {

    const { setBookSearched } = useProvider();
    const formRef = useRef<FormHandles>(null);
    const history = useHistory();

    const handleSubmit = useCallback(({ book }) => {
        setBookSearched(book);
        history.push('/books');
    }, [history, setBookSearched]);

    return (
        <Container>
            <Header />
            <Content>
                <Form ref={formRef} onSubmit={handleSubmit}>
                    <h1>Descubra um mundo de novas ideias, e explore o seu conhecimento através da leitura.</h1>
                    <Input name="book" id="book" icon={FiBookOpen} placeholder="Pesquise pelos melhores livros" />
                </Form>
            </Content>
        </Container>
    );
};

export default HomePage;