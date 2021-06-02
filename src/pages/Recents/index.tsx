import React, { useEffect, useState } from 'react';

import Header from '../../components/Header';
import Card from '../../components/Cards';

import { IBookProps } from '../../utils/interfaces';

import { Container, Content } from './styles';


const Recents: React.FC = () => {
    const [recents, setRecents] = useState<IBookProps[]>([]);

    useEffect(() => {
        const existsFavorite = localStorage.getItem('@SouthSystemBooks:recents');
        if (existsFavorite) {
            setRecents(JSON.parse(existsFavorite));
        }
    }, []);

    return (
        <Container>
            <Header BottomNavigation={1} />
            <Content>
                {
                    recents.length > 0 ?
                        <h2>Livros Acessados Recentemente</h2>
                        :
                        <h1>Nenhum livro foi acessado recentemente</h1>
                }
                <ul>
                    {recents && recents.map((book) => <li key={book.id}><Card book={book} /></li>)}

                </ul>
            </Content>
        </Container>
    );
}

export default Recents;