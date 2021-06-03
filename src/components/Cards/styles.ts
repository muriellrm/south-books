import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;        
    justify-content: space-between;    
    align-items: center;
    width: 300px;    
    height: 60vh;
    margin-top: 40px;
    margin-left: 10px;    
    border-radius: 10px 1px 10px 1px;
    border: 1px solid black;
    background-color: rgba(10,23,55,0.8);
    box-shadow: inset 0 0 80px -10px black;
    border-radius: 10px 1px 10px 1px;
    padding: 30px 0;

    img {
        width: 150px;    
        height: 30vh;
    }   
    transition: all 0.5s;

     &:hover{                           
         transform: scale(1.1);        
         box-shadow: inset 0 0 20px black, 0 0 30px 5px black;
         background-color: rgba(10,23,55,0.95);
     }
    
     > ul {
        width: 80%;
        display: flex;
        align-items: center;
        justify-content: space-around;

        li {
            display: flex;
            align-items: center;
            justify-content: center;           

            svg {
                height: 100%;
                width: 100%;
                
                transition: all 0.5s;

                &:hover{                           
                    transform: scale(1.5);  
                }
            }
        }

    }
`;

export const BookContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h3 {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        max-width: 200px;
        text-align: center;
        font-size: medium;
        text-shadow: 2px 2px #000;
    }

    p {
        margin-top: 10px;
        font-size: 12px;  
        width: 100%;
        max-width: 250px;
        display: flex;
        align-items: center; 
        justify-content: center;     
    }   
`;