import styled from "styled-components";

export const Container = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0px;
  border-radius: 50%;

  @media (max-width: 1600px) {
    right: 2rem;
  }

  @media (min-width: 1600px) {
    right: 5rem;
  }

  @media (max-width: 1370px) {
    right: 1.2rem;
  }

  
  @media (max-width: 1280px) {
    right: 1rem;
  }

  @media (max-width: 800px) {
    right: 0.8rem;
  }


  @media (max-width: 600px) {
    right: 0.6rem;
  }
`;
