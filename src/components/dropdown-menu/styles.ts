import styled from "styled-components";

export const Container = styled.div`
    width: 280px;
    height: 100vh;
    background-color: #fff;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    position: absolute;
    right: 90px;
    top: 15px;
    box-sizing: border-box;
    box-shadow: 1px 1px 0.5px black;
    overflow-y: auto;
;
`;

export const UserArea = styled.div`
    padding: 0.7rem;
    display: flex;
    flex-direction: row;
   


`;

export const UserNames = styled.div`
padding-left: 1rem;
    display: flex;
    flex-direction: column;
    
`;

export const Divisoria = styled.div`
    width: 100%;
    height: 1px;
    background-color: #a0a0a0;
    margin-top: 10px;
    
`;

export const ItensArea = styled.div`
    display: flex;
    flex-direction: column;
  
    
`;

export const MenuItem = styled.div`
    margin: 0.7rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 15px;
    cursor: pointer;
    &.hover-effect:hover{
        background-color: #f2f2f2;
    }
    
`;

