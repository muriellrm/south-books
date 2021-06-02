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

    h1,h2 {
        text-shadow: 2px 2px #000;
    }

`;