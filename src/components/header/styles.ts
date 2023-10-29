import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    height: 55px;
    background-color: #fff;
    padding: 0 16px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0;

   
`;


export const LogoContainer = styled.div `
    display: flex;
    align-items: center;


`;

export const ButtonContainer = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin: 0 10px 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &.hover-effect:hover {
    background-color: #f2f2f2;
  }

`;

export const ButtonIcon = styled.img `

    width: 20px;

`;

export const SearchContainer = styled.div `
    display: flex;
    align-items: center;
`;

export const SearchInputContainer = styled.div `
    width: 450px;
    height: 35px;
    border: 1px solid #d3d3d3;
    border-radius: 40px 0 0 40px;
    display: flex;
    align-items: center;
    padding: 0 16px;

`;

export const SearchInput = styled.input `
    width: 100%;
    height: 25px;
    outline: none;
    border: none;

`;

export const ButtonSearchContainer = styled.button `
    width: 70px;
    height: 36px;
    border: none;
    background-color: #f8f8f8;
    border-radius: 0 40px 40px 0;
    border: 1px solid #d3d3d3;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

`;

export const ButtonLogin = styled.button `
    width: 100px;
    height: 36px;
    border: 1px solid #1973E6;
    background-color: transparent;
    border-radius: 20px;
    cursor: pointer;
    color: #1973E6;
    font-weight: 600;

`;
export const ButtonsAuxContainer = styled.div `
    display: flex;
    align-items: center;
    margin-right: 1rem;

`;
