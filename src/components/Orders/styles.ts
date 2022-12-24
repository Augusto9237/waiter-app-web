import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  gap: 32px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  height: 76vh;
  width: 100%;
`;
