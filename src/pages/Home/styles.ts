import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;

    display: flex;
    flex-direction: column;    
`;

export const Content = styled.div`
    display: flex;        
    align-items: center;
    padding: 0 80px;
    
    form {

        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        max-width: 900px;

        margin-top: 100px;

        h1 {
            font-weight: normal;
            margin-bottom: 50px;
            text-shadow: 2px 2px #000;
            
        }

        div {
            width: 100%;
            max-width: 700px;
        }
        
    }
`;
