import styled from "styled-components";



export const Container = styled.div<{openMenu: boolean}>`
    width: 100%;
    max-width: 1600px;
    display: grid;
    grid-template-columns: ${({openMenu}) => openMenu ? 'repeat(3, 1fr)': 'repeat(4, 1fr)'};
    column-gap: 20px;
    row-gap: 40px;

`;

export const TypesContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;


`;

export const TypeBox = styled.div`
    padding: 0 15px;
    height: 35px;
    border-radius: 10px;
    background-color: #f2f2f2;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 10px;
    cursor: pointer;


`;

export const TitleBox = styled.span`
    font-size: 14px;
    font-weight: 400;

`;