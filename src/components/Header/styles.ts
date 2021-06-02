import { BottomNavigation } from '@material-ui/core';
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;    
    padding: 0 30px;
    background-color: #FFF;
    opacity: 0.9;

    img {
        width: 300px;
        height: 100px;
    }
    
`;

export const Links = styled(BottomNavigation)`
    display: flex;
    align-items: center;
    justify-content: flex-end;

    button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 80px;
    }

`;
