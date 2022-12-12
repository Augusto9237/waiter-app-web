import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  gap: 32px;

  @media (max-width: 768px) {
    flex-direction: column;
  }

`;
