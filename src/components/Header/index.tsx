import React, { useCallback, useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { BottomNavigationAction } from '@material-ui/core';
import { IconBaseProps } from 'react-icons';
import { MdFavorite, MdRestore } from 'react-icons/md';

import logo from '../../assets/logo-south-system.svg';

import Input from '../Input';

import { Container, Links } from './styles';
import { useProvider } from '../../hooks/provider';

interface IHeader {
    BottomNavigation?: number;
    icon?: React.ComponentType<IconBaseProps>;
}

const Header: React.FC<IHeader> = ({ BottomNavigation, icon: Icon }) => {
    const formRef = useRef<FormHandles>(null);
    const { book, setBookSearched } = useProvider();
    const [navigate, setNavigate] = useState(BottomNavigation);
    const history = useHistory();

    const handleSubmit = useCallback(({ book }) => {
        setBookSearched(book);
    }, [setBookSearched]);

    return (
        <Container>
            <Link to="/">
                <img src={logo} alt="logo" />
            </Link>
            { Icon &&
                <Form ref={formRef} onSubmit={handleSubmit}>
                    <Input data-testid="book" defaultValue={book} name="book" icon={Icon} placeholder="Pesquise pelos melhoes livros" />
                </Form>
            }
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
        </Container>
    );
}

export default Header;