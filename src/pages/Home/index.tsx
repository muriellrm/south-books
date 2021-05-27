import { Form } from '@unform/web';
import React, { useCallback, useRef } from 'react';

import Header from '../../components/Header';
import Input from '../../components/Input';
import { FiBookOpen } from 'react-icons/fi';

import { Container, Content } from './styles';

const HomePage: React.FC = () => {
    const formRef = useRef(null);

    const handleSubmit = useCallback(() => { }, []);

    return (
        <Container>
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