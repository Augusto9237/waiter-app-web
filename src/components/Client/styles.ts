import styled from "styled-components";



export const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  flex: 1;
  gap: 24px;

  @media (max-width: 850px) {
    flex-direction: column;
    margin-bottom: 80px;
    overflow-y: scroll;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    margin-bottom: 80px;
    overflow-y: scroll;
  }

  @media (max-width: 300px) {
    overflow-y: scroll;
    margin-bottom: 80x;
  }
`;

export const LoadingContainerProducts = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  height: 100%;
`;

