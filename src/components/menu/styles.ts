import styled from "styled-components";

export const Container = styled.div<{openMenu: boolean}>`
    width: ${({openMenu}) => openMenu ? '270px' : '100px'};
    height: calc(100vh - 55px);
    box-sizing: border-box;
    padding: 15px 10px 10px 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
    position: sticky;
    top: 55px;
    
`;

export const MenuItem = styled.div<{openMenu: boolean}>`
    width: 90%;
    min-height: ${({openMenu}) => openMenu ? '45px' : '70px'};
    border-radius: 10px;
    cursor: pointer;
    padding: 22px 2px;
    display: flex;
    box-sizing: border-box;
    flex-direction: ${({openMenu}) => openMenu ? 'row' : 'column'};
    align-items: center;
    justify-content: ${({openMenu}) => openMenu ? 'none' : 'center'};
    span{
        margin-left: ${({openMenu}) => openMenu ? '22px' : 'none'};
        font-weight: ${({openMenu}) => openMenu ? '600' : '400'};;
        font-size: ${({openMenu}) => openMenu ? '16px' : '14px'};;
    }
    &.hover-effect:hover {
    background-color: #f2f2f2;
  }
`;


export const ButtonIcon = styled.img `

    width: 27px;

`;



export const Divisoria = styled.div<{openMenu: boolean}> `
    
    position: relative;
  width: 100%;
  height: 1px;
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: ${({openMenu}) => openMenu ? 'flex' : 'none'};
  
  &::before {
    content: "";
    position: absolute;
    top: -1px;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #8a8a8a;
  }

    
    

`;

export const ButtonLogin = styled.button `
    width: 150px;
    height: 40px;
    margin-top: 20px;
    margin-bottom: 10px;
    border: 1px solid #9a9a9a;
    background-color: #fff;
    border-radius: 20px;
    color: #4984D4;
    font-weight: 600;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin-right: 2.5rem;

`;