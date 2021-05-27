import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo-south-system.svg';


import { Container, Links } from './styles';

const Header: React.FC = () => {
    return (
        <Container>
            <Link to="/">
                <img src={logo} alt="logo" />
            </Link>
            <Links>
                <Link to="/favoritos">
                    Favoritos
                </Link>
                <Link to="/recentes">
                    Recentes
                </Link>
            </Links>

        </Container>
    );
}

export default Header;