import styled from "styled-components";

export const ContainerAdmin = styled.main`
  display: flex;
  flex: 1;
  max-height: 86vh;
  flex-direction: column;
  width: 100%;
  max-width: 1216px;
  padding: 40px 0px;
  margin: 0px auto;
  gap: 32px;

  overflow-y: auto;

  @media (max-width: 1250px) {
    padding: 40px 40px;
    padding-left: 6%;
  }

  @media (max-width: 1120px) {
    padding: 40px 40px;
    padding-left: 8%;
  }

  @media (max-width: 850px) {
    padding: 30px 30px;
    padding-left: 9%;
  }

  @media (max-width: 500px) {
    padding: 24px 20px;
    padding-left: 50px;
    gap: 24px;
  }

  ::-webkit-scrollbar {
    width: 4px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 20px;
    border: 3px solid rgba(204, 204, 204, 0.4);
  }
`;
