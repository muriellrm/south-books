import { BottomNavigation } from '@material-ui/core';
import styled from 'styled-components';

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

    h2 {
        text-shadow: 2px 2px #000;
    }

`;

export const Header = styled.div`
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

    form {

        div{
            width: 500px;
            height: 60px;
                        
            button {
                width: 40px;
                height: 40px;
                
            }
        }
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