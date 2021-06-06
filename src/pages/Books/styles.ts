import styled from 'styled-components';
import { Pagination } from '@material-ui/lab';

export const Container = styled.div`
    height: 100vh;

    display: flex;
    flex-direction: column;        
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;    
    justify-content: center;
    padding: 80px 80px;
    
    ul {
        display: flex;
        flex-flow: row wrap; 
        align-items: center;
        list-style: none;        
        margin-left: 30px;
    }

    h1,h2 {
        text-shadow: 2px 2px #000;
    }

`;

export const Paginations = styled(Pagination)`
    margin-top: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: #fff;
    height: 100px;
    border: 1px solid rgb(0, 0, 0, 0.9);
    border-radius: 10px;

    ul {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 80%;
    }


`;