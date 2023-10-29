import styled from "styled-components";



export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;


`;


export const LoginArea = styled.form`
    width: 420px;
    height: 500px;
    display: flex;
    align-items: center;
    flex-direction: column;
    border: 1px solid #A0A0A0 ;
    border-radius: 7px;
    margin-top: 1rem;
`;

export const AreaTitle = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 1rem;
`;


export const AreaInputs = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 3rem;
    
`;


export const Input = styled.input`
    width: 320px;
    height: 45px;
    margin-bottom: 1.5rem;
    border: 1px solid #A0A0A0 ;
    border-radius: 7px;
    font-size: 16px;
    padding-left: 1rem;

`;

export const ButtonInput = styled.button`
    width: 120px;
    height: 35px;
    background-color: #1973E6;
    border: none;
    color: white;
    border-radius: 7px;
    font-size: 15px;
    margin-top: 4rem;
    cursor: pointer;
`;