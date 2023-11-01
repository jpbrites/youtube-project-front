import styled from "styled-components";

interface ContainerProps {
  openMenu: boolean;
}

export const Container = styled.div`
  width: 100%;
  max-width: 1600px;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  padding: 2rem;
  box-sizing: border-box;


`;
export const SearchContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

`;