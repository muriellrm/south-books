import styled, { css } from 'styled-components'

interface ContainerProps {
    isFocused: boolean;
    isFilled: boolean;
    isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
    background: #FFF;
    opacity: 0.7;
    border-radius: 10px;
    border: 2px solid #000000;
    padding: 10px;
    width: 100%;

    color: #666360;

    display: flex;
    align-items: center;
    transition: 0.2s;

    ${props => props.isFocused && css`
        color: #FF9900;
        border-color: #FF9900;
        opacity: 0.9;
    `}

    ${props => props.isFilled && css`
        color: #FF9900;
        opacity: 0.9;
    `}
    
    & + div {
        margin-top: 8px;
    }

    input {
        flex: 1;
        background: transparent;
        border: 0;
        

        &::placeholder {
            color: #666360;
        }

    }

    > svg { 
        margin-right: 16px;
    }

    button {
        display: flex;
        align-items: center;
        justify-content: center;
        background: transparent;
        border: transparent;
        border-radius: 50%;
        width: 60px;
        height: 60px;
        margin: 0 10px;
        transition: 0.4s;
        
        &:hover {            
            background: #e7e7e7;
            
        }
        

        svg {             
            width: 20px;
            height: 20px;

        }
    }
`;
