import { Dialog, DialogContent, DialogTitle } from '@material-ui/core';
import styled from 'styled-components';

export const Container = styled(Dialog)`
    
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.8);

    .MuiDialog-paper{
        box-shadow: inset 0 0 20px black, 0 0 30px 5px black;
        background-color: rgba(10,23,55,0.95);
        
    }    

`;

export const Title = styled(DialogTitle)`      
    color: #FFF;
    text-shadow: 2px 2px #000;
    h2 {
        margin: 0 40px;        
        font-size: 30px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
    border-bottom: 2px solid rgba(255, 255, 255, 0.4);
`;


export const Content = styled(DialogContent)`
    display: flex;
    justify-content: space-between;
   
    margin: 40px 40px;

    img {
        border: 2px solid black;
      
        width: 250px;    
        height: 50vh;
        margin-right: 100px;
    }

    p {
        font-size: 20px;
        font-weight: normal;
        font-family: 'RobotoSlab';
        width: 100%;
        max-width: 800px;
        color: #FFF;
    }

    h5 {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        margin: 20px 0;

        p {
            font-size: 15px;
        }


        p + p {
            display: flex;
            align-items: center;
            justify-content: flex-end;
        }        
    }
`;

export const ButtonGroup = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;    
    margin-top: 10px;    

    button {  
        margin-left: 0;        
        svg {    
            display: flex;            
            align-items: center;
            justify-content: center;
            width: 30px;
            height: 30px;
            transition: all 0.5s;
            
            &:hover{                           
                    transform: scale(1.5);  
                }
        }
    } 
`;