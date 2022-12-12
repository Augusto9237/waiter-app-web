import styled from "styled-components";

export const ContainerAdmin = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
  max-width: 1216px;
  margin: 40px auto;
  gap: 32px;



  @media (max-width: 1250px) {
    padding: 0px 40px;
    padding-left: 6%;
  }

  @media (max-width: 1120px) {
    padding: 0px 40px;
    padding-left: 8%;
  }

  @media (max-width: 850px) {
    padding: 0px 30px;
    padding-left: 9%;
  }

  @media (max-width: 500px) {
    padding: 0px 20px;
    padding-left: 50px;
  }


`;