import { BottomNavigationAction } from '@material-ui/core';
import React, { useState } from 'react';
import { MdFavorite, MdRestore } from 'react-icons/md';
import { Link, useHistory } from 'react-router-dom';

import logo from '../../assets/logo-south-system.svg';


import { Container, Links } from './styles';

interface IHeader {
    BottomNavigation?: number;
}

const Header: React.FC<IHeader> = ({BottomNavigation}) => {
    const [value, setValue] = useState(BottomNavigation);
    const history = useHistory();
    return (
        <Container>
            <Link to="/">
                <img src={logo} alt="logo" />
            </Link>
            <Links
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                showLabels
            >
                <BottomNavigationAction onClick={() => { history.push('/favorites') }} label="Favorites" icon={<MdFavorite />} />
                <BottomNavigationAction onClick={() => { history.push('/recents') }}label="Recents" icon={<MdRestore />} />
            </Links>
        </Container>
    );
}

export default Header;