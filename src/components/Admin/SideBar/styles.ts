import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  width: 60px;
  min-height: 100vh;
  display: flex;
  background: #ffff;
  box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.2);

  @media (min-width: 1733px) {
    width: 250px;
  }
`;
