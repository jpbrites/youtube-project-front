import styled from "styled-components";

export const Modal = styled.div`
    position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;

`;


export const ModalContent = styled.div`
position: relative;
  background: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

`;



export const ButtonClose = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 30px;
  height: 30px;
  background: #333;
  color: #fff;
  border: none;
  border-radius: 50%; /* Torna o botão circular */
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px; /* Ajuste o tamanho do ícone de fechar */

`;

export const Input = styled.input`
    width: 450px;
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